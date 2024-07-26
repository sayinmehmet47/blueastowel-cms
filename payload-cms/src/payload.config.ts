import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

import Users from './collections/Users';
import AboutUs from './collections/AboutUs';
import { Media } from './collections/Media';
import OurWorks from './collections/OurWorks';
import RoundedBeachTowels from './collections/RoundedBeachTowel';
import MainPageCarousel from './collections/MainPageCarousel';
import MainPageAccordion from './collections/MainPageAccordion';
import MainPage from './collections/MainPage';
import Towels from './collections/Towels';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    AboutUs,
    Media,
    OurWorks,
    RoundedBeachTowels,
    MainPageCarousel,
    MainPageAccordion,
    MainPage,
    Towels,
  ],
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3000',
    'https://localhost:3001',
    'https://blueastowel.com',
    'https://www.blueastowel.com',
    'https://payload.blueastowel.com',
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3000',
    'https://localhost:3001',
    'https://blueastowel.com',
    'https://www.blueastowel.com',
    'https://payload.blueastowel.com',
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
            },
            bucket: process.env.S3_BUCKET,
          }),
        },
      },
    }),
    payloadCloud(),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  email: {
    transportOptions: {
      host: 'smtp.gmail.com', // Google's SMTP server
      auth: {
        user: process.env.SMTP_USER, // Your Gmail address
        pass: process.env.SMTP_PASS, // Your Gmail password or app-specific password
      },
      port: 465, // Secure port for SMTP
      secure: true, // True for port 465
      requireTLS: true, // Google's SMTP requires TLS
    },
    fromName: 'Your Name or Your Company Name',
    fromAddress: 'blueastowel92@gmail.com',
  },
  routes: {
    api: '/api/cms',
  },
});
