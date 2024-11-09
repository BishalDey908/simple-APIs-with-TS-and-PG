import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function dbConnect() {
  try {
      await prisma.$connect();
      console.log("DB connected successfully")
  } catch (err) {
    console.error("Error connecting to DB:", err)
  }finally{
    await prisma.$disconnect()
    console.log("DB disconnected successfully")
}
}
 
dbConnect()