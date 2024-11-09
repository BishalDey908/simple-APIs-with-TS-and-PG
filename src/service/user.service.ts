import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

class userService {
  async createUser(payload: { name: string; email: string }) {
    const { name, email } = payload;
    try {
      const data = await prismaClient.user.create({ data: { name, email } });
      return data;
    } catch (error) {
      return error;
    }finally{
        await prismaClient.$disconnect()
        console.log("User created successfully and disconnected")
    }
  }

  async getUserService(payload: { name: string; email: string }) {
    const { name, email } = payload;
    try {
      if (payload.name && payload.email) {
        const response = await prismaClient.user.findFirst({
          where: {
            OR: [{ name: name }, { email: email }],
          },
        });
        return response;
      } else if (payload.name) {
        const { name } = payload;
        const response = await prismaClient.user.findFirst({ where: { name } });
        return response;
      } else if (payload.email) {
        const { email } = payload;
        const response = await prismaClient.user.findFirst({
          where: { email },
        });
        return response;
      } else {
        const response = await prismaClient.user.findMany();
        return response;
      }
    } catch (error) {
      return error;
    } finally{
        await prismaClient.$disconnect()
        console.log("User fetched successfully and disconnected")
    }
  }
}

export default new userService();
