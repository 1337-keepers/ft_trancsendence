import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { PrismaClient} from '@prisma/client';
import { User } from "../types";

@Injectable({})
class ChatService {
	private prisma : PrismaClient;
	private jwtService : JwtService

	constructor() {
		this.prisma = new PrismaClient();
		this.jwtService = new JwtService();
	}

	async verifyToken(token : string) {
		try {
			const decoded = this.jwtService.verify(token);
			return decoded;
		} catch (err) {
			throw err;
		}
	}

	async getUser(userName : string) {
		try {
			const user = await this.prisma.user.findUnique({
				where : { username : userName },
				include : { channels : { include : { messages : true } } }
			})
			if (!user) throw new Error('User not found');
			return user;
		} catch (err) {
			throw err;
		}
	}
}

export default ChatService;