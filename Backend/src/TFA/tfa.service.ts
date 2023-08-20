import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import * as speakeasy from 'speakeasy';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class TfaService {
  private prisma: PrismaClient;
    constructor(private jwtService: JwtService) {
      this.prisma = new PrismaClient();
    }

    async verifyToken(secret: string, cookie: string): Promise<boolean> {
      const decoded: User = await this.jwtService.verifyAsync(cookie);
      const user = await this.prisma.user.findUnique({ where: { id: decoded.id } });
      if (user) {
        if (user.otpCode === secret) {
          return true;
        } else {
          return false;
        }
        // const verified = speakeasy.totp.verify({
        //     secret: user.otpCode,
        //     encoding: 'base32',
        //     token: secret,
        // });
        // return verified;
      }
      return false;
    }
}
