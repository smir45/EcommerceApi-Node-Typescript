import { Request, Response } from "express";
import { User }  from "../entity/User"
// import bcrypt from 'bcrypt'


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
            // const hashedPassword = bcrypt.genSalt(10, userData.password)
            // const token = Math.floor(Math.random() * 4)
            const userPasswordd = "this is trial"
            const user = await User.create({
                fName: userData.firstname,
                lName: userData.lastname,
                email: userData.email,
                password: userPasswordd,
                // verification_token: token,


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

