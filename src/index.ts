// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};



// async bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {
//   try {
//     await strapi
//       .plugin("email-designer-5")
//       .service("email")
//       .sendTemplatedEmail(
//         {
//           // required
//           // This can also be an array of email addresses
//           to: "to@example.com",
//           // Optional
//           cc: ["2003jaindarshan@gmail.com", "compitcomds@gmail.com"],
//           // Optional
//           bcc: ["deedraft0@gmail.com"],
//           // optional if /config/plugins.js -> email.settings.defaultFrom is set
//           from: "sahayta52@gmail.com",
//           // optional if /config/plugins.js -> email.settings.defaultReplyTo is set
//           replyTo: "info@compitcom.com",
//           // optional array of files
//           attachments: [],
//         },
//         {
//           // required - Ref ID defined in the template designer (won't change on import)
//           templateReferenceId: 1,
//           // If provided here will override the template's subject.
//           // Can include variables like `Thank you for your order {{= USER.firstName }}!`
//           subject: `this is testing`,
//         },
//         {
//           // this object must include all variables you're using in your email template
//           USER: { firstName: "John", lastName: "Doe" },
//           order: {
//             products: [
//               { name: "Article 1", price: 9.99 },
//               { name: "Article 2", price: 5.55 },
//             ],
//           },
//           shippingCost: 5,
//           total: 20.54,
//         }
//       );
//     strapi.log.info("Email sent");
//   } catch (error) {
//     strapi.log.error(error);
//   }
// },
// };