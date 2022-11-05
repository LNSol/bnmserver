// const dotenv = require('dotent');
// dotenv.config();
// module.exports = {
//   PORT
// }

import { config } from 'dotenv';
config();

export const { PORT } = process.env;
