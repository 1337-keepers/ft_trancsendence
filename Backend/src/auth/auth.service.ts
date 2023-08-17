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
      apiKey: '54a8d6e2',
      apiSecret: 'DeSDQC4N7pXGP2ba',
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
  async validateOrRegisterUser(profile: User): Promise<any> {
    // console.error('this is the profile : ', profile);
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
            towFactorAuth: true,
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