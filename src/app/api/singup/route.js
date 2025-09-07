const { default: dbconnect } = require("@/lib/db")
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(rqs) {
    try {
        const { name, email, password } = await rqs.json()
        await dbconnect()

        const finduser = await User.findOne({ email })
        if (finduser) {
            return Response.json({ message: "User already exists" }, { status: 400 })
        }
        const hahsedpassword = await bcrypt.hash(password, 12)
        const newuser = await User({ name, email, password: hahsedpassword })
        await newuser.save()
        return Response.json({ message: "User created successfully" }, { status: 201 })
    } catch (err) {
        console.log(err)
        return Response.json({ message: "Internal Server Error" }, { status: 500 })
    }
}