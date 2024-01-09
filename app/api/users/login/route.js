import User from "@/models/UserModels";
import connect from "@/utils/db";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"; 

connect();

export async function POST(NextRequest) {
    try {
        const reqBody = await NextRequest.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }
        console.log("User exists");

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
        }
        console.log(user);

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        // Create token
        const token = jwt.sign(tokenData, 'gfhg', { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true,
        });
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
