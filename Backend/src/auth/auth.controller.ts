import { Controller, Get, UseGuards, Req, Res, Post, Param, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Buffer } from 'buffer';
import { PrismaClient, User } from '@prisma/client';
import { find } from 'rxjs';
import { stringify } from 'querystring';
import * as speakeasy from 'speakeasy';
import { Vonage } from '@vonage/server-sdk';

@Controller('oauth')
export class AuthController {
  private prisma: PrismaClient;
  constructor(private authService: AuthService) { 
    this.authService = authService;
    this.prisma = new PrismaClient();
  }

  @UseGuards(AuthGuard('oauth2'))
  @Get('callback')
  async LoginCallback(@Req() req, @Res() res: Response) {
    const user = await this.authService.validateOrRegisterUser(req.user) as User;
    const token = await this.authService.createJwtToken(req.user.username);
    res.cookie('jwt', token);
    if (Object.values(user)[6] == true)
    {
      const id: string = user.id;
      const code: string = this.authService.generateSecret();
      const updatedItem = await this.prisma.user.update({
        where: { id },
        data: { otpCode: code } 
      });
      this.authService.sendSMS("MY_SERVER", user.phoneNumber, code);
      res.redirect(`http://localhost:3001/auth?id=${user.id}`);
    }
    else
      res.redirect(`http://localhost:3001/profile`);
  }

}