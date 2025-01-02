// config/plugins.ts
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
    
  });