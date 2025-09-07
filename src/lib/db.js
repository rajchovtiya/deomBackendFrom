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
    throw new Error("Please define the MONGODB_URI environment variable in Vercel");
}

let isConnected = false;

export default async function dbConnect() {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }
}
