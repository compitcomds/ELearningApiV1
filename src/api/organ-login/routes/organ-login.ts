export default {
  routes: [
    {
      method: 'POST',
      path: '/organ-register',
      handler: 'organ-login.register',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/organ-login',
      handler: 'organ-login.login',
      config: {
        auth: false,
      },
    },
  ],
};
