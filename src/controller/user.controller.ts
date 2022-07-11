import { Request, Response } from "express";
import { User }  from "../entity/User"
import argon2 from "argon2";
import otpGenerator from "otp-generator"


export class UserController {
    async  getUser(req: Request, res: Response){
        const { email } = req.body

        try{
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(200).json({ error: 'User Not Found' });
            }
            return res.status(200).json({
                data: user
            })
        }catch (e) {
            console.log(e)
            return res.status(500)
        }

    }

    async createUser(req: Request, res: Response){
        const userData = req.body
        try{

            const existingUser = await User.findOne({
                where: {
                    email: userData.email
                }
            })

            if(existingUser) return res.status(500).json({message: "User Already Exists"})

            const hashedPassword = await argon2.hash(userData.password)

            const generated_Otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })

            console.log(generated_Otp)

            const user = await User.create({
                fName: userData.firstname,
                lName: userData.lastname,
                email: userData.email,
                password: hashedPassword,
                verification_token: generated_Otp,


            })
            return res.status(201).json({
                data: user
            })

        }catch (e) {
            console.log(e)
            return res.status(500)
        }
    }
}

