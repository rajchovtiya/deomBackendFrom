import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/NExtDemoPRoject";

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}
let conn = null;

export default async function dbconnect() {
    if (conn) return conn;
    conn = mongoose.connect(MONGODB_URI, { bufferCommands: false });
    return conn;
}

