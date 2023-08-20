import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as speakeasy from 'speakeasy';
import { Vonage } from '@vonage/server-sdk';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;
  private vonage: Vonage;

  constructor(private jwtService: JwtService) {
    this.prisma = new PrismaClient();
    this.vonage = new Vonage({
      apiKey: 'd9dd5c3a',
      apiSecret: 'ovocDF4ydFIG9y7y',
    }as any);
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

  sendSMS (from: string, to: string, text: string): void {
    try {
      const msg = { from, to, text };
      const response = this.vonage.sms.send(msg);
      console.log('SMS sent successfully');
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  generateSecret(): string {
    const secret = speakeasy.generateSecret({ length: 6 }).base32;
    const otpCode = speakeasy.totp({
      secret: secret,
      encoding: 'base32',
    });
    return otpCode;
  }

  async createJwtToken(userName: string): Promise<string> {
    const payload = { sub: userName };
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
  async validateOrRegisterUser(profile: any): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id: profile.id } });
      if (user) {
        return user;
      } else {
        const newUser = await this.prisma.user.create({
          data: {
            id: profile.id,
            userName: profile.username,
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            cover: profile.cover,
            avatar: profile.avatar,
            towFactorAuth: false,
            userstatus: "offline",
            phoneNumber: "+212638217844",
          },
        });
        return newUser;
      }
    }
    catch (err) {
      throw err;
    }    
  }
}