import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-42';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as json from 'json';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, 'oauth2') {
  constructor(
    private readonly authService: AuthService) {
    super({
      clientID: 'u-s4t2ud-22964183ad1e4850a6e941f550a94ba9ce264c47ba0e8224bb4d90d874b70a41',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/oauth/callback',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile): Promise<any> {
      const raw: any = JSON.parse(profile._raw);
      const ava: string = raw.image.link;
      return ({
        id: profile.id,
        username: profile.username,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        cover: "",
        avatar: ava,
        towFactorAuth: false,
        phoneNumber: "+212638217844"
    });
  }
}