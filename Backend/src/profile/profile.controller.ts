import { Controller, Get, UseGuards, Req, Res, Post, Param, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { ProfileService } from './profile.service';
import { Buffer } from 'buffer';
import { PrismaClient } from '@prisma/client';
import { find } from 'rxjs';
import { stringify } from 'querystring';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class ProfileController {

  constructor(private profileService: ProfileService) { 
    this.profileService = profileService;
  }

  @Get('profile')
  async getUserByUserName(@Query('token') token: string, @Res() res: Response) {
    try {
        // console.error('token 10: ', token);
        const user = this.profileService.verifyToken(token);
        if (!user)
          throw new Error('User not found');
        if ((await user).towFactorAuth == true)
          res.redirect(`http://localhost:3001/auth`);

        // const user = await this.profileService.findUserByUserName(username);
        // console.error('MZN');
        res.send(user);
    }
    catch (err) {
        res.redirect(`http://localhost:3001/missing`);
        // console.log('problem unknown');
        throw err;
    }
  }
}