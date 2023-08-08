import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { PassportModule } from '@nestjs/passport';
import { SessionModule } from 'nestjs-session';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}