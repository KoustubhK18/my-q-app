import {connect} from '@/app/DBConfig/mongoConfig'
import User from '@/app/models/userModel' 
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcrypt'

connect()

export async function POST(request){
    try {
        console.log("SignUp api called");
        const reqBody = await request.json();
        const {userName, email, password} = reqBody;

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: "User already exists!"},{status: 400})
        }

        //hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        console.log(hashedPassword);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();

        console.log(savedUser);

        return NextResponse.json({
            message: "New user created successfully",
            success: true
        }, {status: 201});
    } catch (error) {
        NextResponse.json({error: error.message}, {status:500})
    }
}