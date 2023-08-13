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

  async verifyToken(token: string): Promise<User> {
    try {
      // console.error('token 2: ', token);
      const decoded: User = await this.jwtService.verifyAsync(token);
      // console.error('token finded');
      return decoded;
    }
    catch (err) {
      console.error('error token');
      throw err;
    }
  }

  async findUserByUserName(username: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { username } });
      console.error(user);
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