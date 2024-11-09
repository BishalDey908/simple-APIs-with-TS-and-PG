
import userService from "../service/user.service";
import { Request,Response } from "express";

class usersController{
    async createUserController(req:Request,res:Response):Promise<void>{
        try{
            const response = await userService.createUser((req as any).body)
            res.status(201).json({success:true,message:"User created successfully",data:response})
        }catch(error){
           res.status(500).json({success:false,message:"User created unsuccessfully",data:error})
        }
    }

    async getUsers(req:Request,res:Response): Promise<void>{
      try{
         const response = await userService.getUserService((req as any).body)
         res.status(200).json({success:true,message:"User fetched successfully",data:response})
      }catch(error){
         res.status(500).json({success:false,message:"User not fetched successfully",data:error})
      }
    }
}

export default new usersController()