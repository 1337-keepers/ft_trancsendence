import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { SessionModule } from 'nestjs-session';
import { FortyTwoStrategy } from './fortytwo.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
  providers: [FortyTwoStrategy, AuthService],
})
export class AuthModule {}