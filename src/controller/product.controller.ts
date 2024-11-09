import productService from "../service/product.service"
 import { Request, Response } from "express"

class productController{
    async createProduct(req: Request, res: Response): Promise<void>{
        try{
            const response = await productService.createProduct((req as any).body)
             res.status(201).json({message:"Product created successfully",success:true,data:response})
        }catch(error){
             res.status(201).json({message:"Product created successfully",success:false,data:error})
        }
    }

    async getProduct(req:Request,res:Response): Promise<void>{
        try{
            console.log(">>>",req.body)
            if(req.body){
                const data = await productService.getproducts((req as any).body)
                res.status(200).json({message:"Product fetched successfully  1",success:true,data:data})
            }
        }catch(error){
            res.status(201).json({message:"Product not fetched successfully",success:false,data:error})
        }
    }

    async deleteProduct(req:Request,res:Response): Promise<void>{
        try{
            const response = await productService.deleteProduct((req as any).body)
            res.status(200).json({message:"Product deleted successfully",success:true,data:response})
        }catch(error){
            res.status(201).json({message:"Product not deleted successfully",success:false,data:error})
        }
    }
}

export default new productController()