import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import * as speakeasy from 'speakeasy';

@Injectable()
export class TfaService {
  private prisma: PrismaClient;
    constructor() {
      this.prisma = new PrismaClient();
    }

    async verifyToken(secret: string, id: string): Promise<boolean> {
      const user = await this.prisma.user.findUnique({ where: { id: id } });
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
