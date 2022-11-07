// const dotenv = require('dotent');
// dotenv.config();
// module.exports = {
//   PORT
// }

import { config } from 'dotenv';
config();

export const { PORT, MAIL_ID } = process.env;

export const DbInfo = {};

export const MailInfo = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  tls: { rejectUnauthorize: false },
  maxConnections: 5,
  maxMessages: 10,
  auth: {
    user: MAIL_ID,
    pass: process.env.MAIL_PASSWORD,
  },
};
