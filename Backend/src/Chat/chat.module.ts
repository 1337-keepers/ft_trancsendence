import { Module } from '@nestjs/common';
import ChatConteoller from './chat.controller';
import ChatService from './chat.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports : [JwtModule.register({
		global : true,
		secret : 'OUR_SECRET_KEY_FOR_JWT_TOKEN_GENERATION_!@#$%^&*()_+', //! This is a secret key for JWT token generation
		signOptions : { expiresIn : '1d' }
	})],
	controllers : [ChatConteoller],
	providers : [ChatService]
})
export class ChatModule {}
