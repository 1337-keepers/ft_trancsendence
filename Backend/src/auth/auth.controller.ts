import { Controller, Get, UseGuards, Req, Res, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
@Controller('oauth')
export class AuthController {

  constructor(private authService: AuthService) { 
    this.authService = authService;
  }

  // @Get('login')
  // @UseGuards(AuthGuard('oauth2'))
  // async Login(@Req() req, @Res() res) {
  //   res.redirect(encodeURIComponent('https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-22964183ad1e4850a6e941f550a94ba9ce264c47ba0e8224bb4d90d874b70a41&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback&response_type=code'));
  //   return '42 login';
  // }

  @UseGuards(AuthGuard('oauth2'))
  @Get('callback')
  async LoginCallback(@Req() req, @Res() res: Response) {
    this.authService.createUser(req.user);
    res.redirect('/profile');
    res.send('Done');
  }

}