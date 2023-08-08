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
  async getUserByUserName(@Query('username') username: string, @Query('token') token: string, @Res() res: Response) {
    try {
        console.error('token 1: ', token);
        this.profileService.verifyToken(token);
        console.error('username 1: ', username);
        const user = await this.profileService.findUserByUserName(username);
        console.error('MZN');
        res.send(user);
    }
    catch (err) {
        console.log('problem unknown');
        throw err;
    }
  }
}