import { Controller, Get, UseGuards, Req, Res, Post, Param, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { ProfileService } from './profile.service';
import { Buffer } from 'buffer';
import { PrismaClient } from '@prisma/client';
import { find } from 'rxjs';
import { stringify } from 'querystring';

@Controller()
export class ProfileController {

  constructor(private profileService: ProfileService) { 
    this.profileService = profileService;
  }

  @Get('profile')
  async getUserByUserName(@Query('username') username: string, @Res() res: Response) {
    try {
        const user = await this.profileService.findUserByUserName(username);
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
  }
}