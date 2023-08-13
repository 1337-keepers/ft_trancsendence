import { Controller, Get, UseGuards, Req, Res, Post, Param, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Buffer } from 'buffer';
import { PrismaClient } from '@prisma/client';
import { find } from 'rxjs';
import { stringify } from 'querystring';
@Controller('oauth')
export class AuthController {

  constructor(private authService: AuthService) { 
    this.authService = authService;
  }

  @UseGuards(AuthGuard('oauth2'))
  @Get('callback')
  async LoginCallback(@Req() req, @Res() res: Response) {
    this.authService.validateOrRegisterUser(req.user);
    const token = await this.authService.createJwtToken(req.user.username);
    res.cookie('jwt', token);
    res.redirect(`http://localhost:3001/profile`);
  }

}