// config/plugins.ts
import type { EmailConfig } from "strapi-plugin-email-designer-5/dist/server/src";



export default ({ env }) => ({
    "gen-types": {
      enabled: true,
      config: {
        outputLocation: "myTypes.ts",
        // If this is true, then the outputLocation should be the location to a .ts file
        singleFile: true,
      },
    },
    'protected-populate': {
      enabled: true,
      config: {
        ['auto-populate']: true,
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_CLOUD_NAME'),
          api_key: env('CLOUDINARY_API_KEY'),
          api_secret: env('CLOUDINARY_API_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: env('GMAIL_USER'), // Your Gmail address
            pass: env('GMAIL_PASSWORD'), // Your Gmail password or app password
          },
          secure: false, // Use true for port 465, false for other ports
        },
        settings: {
          defaultFrom: env('GMAIL_USER'),
          defaultReplyTo: env('GMAIL_USER'),
        },
      },
    },
    // This is the configuration for the Email Designer plugin
    "email-designer-5": {
      enabled: true,
      // Your custom configuration here
      config: {
        // Here the Merge Tags defined will be merged with the defaults above
        mergeTags: {
          company: {
            name: "Company",
            mergeTags: {
              name: {
                name: "Company Name",
                value: "ACME Corp",
                sample: "ACME Corp",
              },
            },
          },
        },
      } as EmailConfig,
    },
    'users-permissions': {
    config: {
      jwt: {
        expiresIn: '3d', // Set token to expire in 3 days
      },
    },
  },

  });