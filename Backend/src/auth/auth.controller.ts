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
    // const f = stringify(req.user);
    res.redirect(`http://localhost:3001/profile/${req.user.username}?username=${req.user.username}`);
    // res.send(req.user);
  }

  // @Get('profile')
  // async Profile(@Req() req, @Res() res) {
  //   res.send('profile');
  //   console.log('Weslat');
  // }

}