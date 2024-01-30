import dotenv from 'dotenv';
dotenv.config();

// exports.port = process.env.PORT;
// exports.nodeEnv = process.env.NODE_ENV;
export const MONGODB_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || '';
