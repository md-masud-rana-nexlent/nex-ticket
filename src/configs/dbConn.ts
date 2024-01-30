import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from './env';

let conn: Promise<typeof import('mongoose')> | null = null;

const uri = MONGODB_CONNECTION_STRING;

export const dbConnect = async function () {
  if (conn == null) {
    conn = mongoose
      .connect(uri, {
        dbName: 'cleanProducts',
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => mongoose);

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }

  return conn;
};
