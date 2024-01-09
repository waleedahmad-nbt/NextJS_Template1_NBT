import User from "@/models/UserModels";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";



export async function POST(NextRequest) {
    connect();
    try {
        const reqbody = await NextRequest.json();
        const { firstname, lastname, username, email, password } = reqbody;
        console.log(reqbody);

        // Check if user already exists with the same firstname
        const existingUser = await User.findOne({ firstname });
        if (existingUser) {
            return NextResponse.json({ error: "User with this firstname already exists" }, { status: 400 });
        }

        //check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User Already exists" }, { status: 400 });
        }



        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            lastname,
            firstname,
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


