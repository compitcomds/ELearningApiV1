export default {
  async register(ctx) {
    try {
      const { email, username, password } = ctx.request.body;

      if (!email || !username || !password) {
        return ctx.badRequest('Email, username and password are required');
      }

      const existingUser = await strapi.query('plugin::users-permissions.user').findOne({
        where: {
          $or: [{ email }, { username }],
        },
      });

      if (existingUser) {
        return ctx.badRequest('Email or username already taken');
      }

      const newUser = await strapi.query('plugin::users-permissions.user').create({
        data: {
          email,
          username,
          password,
          role: 5, // your organisation role ID
          confirmed: true,
          blocked: false,
        },
      });

      const jwt = strapi.plugin('users-permissions').service('jwt').issue({ id: newUser.id });

      // Simple manual sanitization
      const sanitizedUser = { ...newUser };
      delete sanitizedUser.password;

      return ctx.send({
        user: sanitizedUser,
        jwt,
      });
    } catch (err) {
      console.error(err);
      return ctx.internalServerError('Registration failed');
    }
  },

  async login(ctx) {
    try {
      const { identifier, password } = ctx.request.body;

      if (!identifier || !password) {
        return ctx.badRequest('Identifier and password are required');
      }

      const user = await strapi.query('plugin::users-permissions.user').findOne({
        where: {
          $and: [
            {
              $or: [{ email: identifier }, { username: identifier }],
            },
            { role: 5 },
          ],
        },
      });

      if (!user) {
        return ctx.badRequest('Invalid credentials');
      }

      const validPassword = await strapi.plugin('users-permissions').service('user').validatePassword(
        password,
        user.password
      );

      if (!validPassword) {
        return ctx.badRequest('Invalid credentials');
      }

      if (user.blocked) {
        return ctx.forbidden('Your account is blocked');
      }

      const jwt = strapi.plugin('users-permissions').service('jwt').issue({ id: user.id });

      const sanitizedUser = { ...user };
      delete sanitizedUser.password;

      return ctx.send({
        user: sanitizedUser,
        jwt,
      });
    } catch (err) {
      console.error(err);
      return ctx.internalServerError('Login failed');
    }
  },
};
