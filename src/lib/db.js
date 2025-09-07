// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/NExtDemoPRoject"

// if (!MONGODB_URI) {
//     throw new Error(
//         "Please define the MONGODB_URI environment variable inside .env.local"
//     )
// }
// let conn = null;

// export default async function dbconnect() {
//     if (conn) return conn;
//     conn = mongoose.connect(MONGODB_URI, { bufferCommands: false });
//     return conn;
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("⚠️ Please define MONGODB_URI in environment variables");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
