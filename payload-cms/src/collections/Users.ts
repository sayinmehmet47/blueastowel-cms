import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    update: ({ req: { user } }) => {
      // Allow updates if the user is an admin
      return user?.roles?.includes('admin');
    },
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      defaultValue: 'user',
      required: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create') {
          const users = await req.payload.find({
            collection: 'users',
            limit: 1,
          });

          if (users.totalDocs === 0) {
            data.roles = 'admin';
          }
        }
        return data;
      },
    ],
  },
};

export default Users;
