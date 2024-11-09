import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

class productService{

    async createProduct(payload:{name:string,price:string}){
     try{
        const{name,price} = payload
        const data = await prismaClient.product.create({data:{name,price}})
        return data
     }catch(err){
         console.log(err)
     }finally{
        await prismaClient.$disconnect()
        console.log("Product created successfully and disconnected")
     }
    }

    async getproducts(payload:{id?:number, name?:string,price?:string} ){
        
        try{
            if(payload && (payload.id || payload.name || payload.price)){
                const{id, name, price} = payload
              const data = await prismaClient.product.findFirst({
                where:{
                    OR:[
                        {id:id},
                        {name:name},
                        {price:price}
                    ]
                }
              })
              return data

            }else{
                console.log(">>>")
                const data = await prismaClient.product.findMany()
                return data
            }
        }catch(error){
            return error
        }finally{
            await prismaClient.$disconnect()
            console.log("Product fetched successfully and disconnected")
         }
    }

    async deleteProduct(payload:{id:number}){
        const{id} = payload
        try{
            const deleteProduct = await prismaClient.product.delete({where:{id:id}})
            return deleteProduct 
        }catch(error){
            return error
        }finally{
            await prismaClient.$disconnect()
            console.log("Product deleted successfully and disconnected")
        }
    }
}

export default new productService()