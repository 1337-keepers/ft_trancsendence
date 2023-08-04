import { Controller, Get, UseGuards, Req, Res, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
import querystring from 'querystring';
@Controller('oauth')
export class AuthController {

  constructor(private authService: AuthService) { 
    this.authService = authService;
  }

  @UseGuards(AuthGuard('oauth2'))
  @Get('callback')
  async LoginCallback(@Req() req, @Res() res: Response) {
    this.authService.validateOrRegisterUser(req.user);
    console.log(req.user);
    const token = await this.authService.createJwtToken(req.user.id);
    res.cookie('jwt', token);
    // const queryParams = querystring.stringify(req.user);
    res.redirect(`http://localhost:3001/profile/${req.user.username}`);
  }

  @Get('profile')
  async Profile(@Req() req, @Res() res) {
    res.send('profile');
    console.log('Weslat');
  }
}