import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProfileService {
  private prisma: PrismaClient;

  constructor(private jwtService: JwtService) {
    this.prisma = new PrismaClient();
  }

  // async getUsers(): Promise<User[]> {
  //   return this.prisma.user.findMany();
  // }

  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   return await this.prisma.user.create({ data });
  // }

  // async deleteUser(id: string): Promise<User> {
  //   return this.prisma.user.delete({ where: { id } });
  // }

  verifyToken(token: string): Promise<string> {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded.sub;
    }
    catch (err) {
      console.error('error token');
      throw err;
    }
  }

  async findUserByUserName(username: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { userName: username } });
      if (user)
        return user;
      else
        throw new Error('user not found');
    }
    catch (err) {
      throw err;
    }
  }
}