import { Request, Response } from "express";
import { prisma } from "../Db/prismaDb";

const RegisterUser = async(req: Request, res: Response) => {
    const { username,  email } = req.body;
    
    const user  = await prisma.user.create({
        data: {
            name: username,
            email: email,   
        },                          
    })

    res.status(201).json({ message: "User registered successfully", user });          

}

export default RegisterUser;