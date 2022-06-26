import { Request, Response } from "express";
import User  from "./index"


export class UserController {

    async  getOneUser(req: Request, res: Response){
        try{
            const userDetails = req.body;

            const user = await User.findOne({
                where: {
                    email: userDetails.email
                }
            })
            if(!user) return res.status(404).json({message: "User doesnot exist"})
            res.status(200).json(
                {
                    data: user
                }
            )
        }catch (e) {
            res.status(500).json({
                message: e.message
            })
        }

    }
}

