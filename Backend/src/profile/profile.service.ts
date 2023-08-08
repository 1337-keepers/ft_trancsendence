import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProfileService {
  private prisma: PrismaClient;

  constructor() {
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

  async findUserByUserName(username: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { username } });
      return user;
    }
    catch (err) {
      console.error(err);
      throw new Error('Failed to fetch user by username');
    }
  }
}