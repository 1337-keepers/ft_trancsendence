import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TfaModule } from './TFA/tfa.module';
import { PassportModule } from '@nestjs/passport';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [PassportModule, AuthModule, ProfileModule, TfaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
