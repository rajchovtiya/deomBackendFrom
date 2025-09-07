const { default: dbconnect } = require("@/lib/db")
const { default: User } = require("@/models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export async function POST(rqs) {

    try {
        const { email, password } = await rqs.json()
        await dbconnect()

        const userfind = await User.findOne({ email })
        if (!userfind) {
            return Response.json({ message: "Invalid Credentials" }, { status: 400 })
        }
        const isMatch = await bcrypt.compare(password, userfind.password)
        if (isMatch) {
            const token = jwt.sign({ id: userfind._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
            return Response.json({ message: "Login Successful", token }, { status: 200 })
        } else {
            return Response.json({ message: "Invalid Credentials" }, { status: 400 })
        }

    } catch (err) {
        console.log(err)
        return Response.json({ message: "Internal Server Error" }, { status: 500 })
    }

}