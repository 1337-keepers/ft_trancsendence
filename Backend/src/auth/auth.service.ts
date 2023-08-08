import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
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

  async createJwtToken(userId: string): Promise<string> {
    const payload = { sub: userId };
    try {
      return await this.jwtService.signAsync(payload);
    }
    catch (err) {
      console.error(err);
      throw new Error('Failed to create JWT token');
    }
  }

  // async closePrisma() {
  //   await this.prisma.$disconnect();
  // }
  async validateOrRegisterUser(profile: User): Promise<any> {
    // Retrieve or create the user based on the profile data
    // You can perform any necessary operations to store and retrieve user information from your database or other data source
    
    // Example: Assuming you have a database with a User model
    try {
      const user = await this.prisma.user.findUnique({ where: { id: profile.id } });
      if (user) {
        return user;
      } else {
        const newUser = await this.prisma.user.create({
          data: {
            id: profile.id,
            username: profile.username,
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            cover: profile.cover,
            towFactorAuth: false,
          },
        });
        return newUser;
      }
    }
    catch (err) {
      throw err;
    }
    
    // If the user exists, return it. Otherwise, create a new user.
    
  }
}