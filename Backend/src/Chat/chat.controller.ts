import { Controller, Get, Query, Res } from "@nestjs/common";
import ChatService from "./chat.service";
import { Message, Channel } from "@prisma/client";
import { User } from "../types";
import { Response } from "express";

@Controller('chat')
class ChatConteoller {
	constructor(private chatService: ChatService) {}

	@Get('user')
	// async getUser(@Query ('token') token : string, @Res() res : Response) {
	async getUser(@Query ('userName') userName : string, @Res() res : Response) {
		try {
			// if (!token)
			// 	res.send([])
			// else {
			// 	const data = this.chatService.verifyToken(token)
			// 	const userName = data['userName']
				const user = await this.chatService.getUser(userName)
				res.send(user)
			// }
		}
		catch (err) {
			// res.status(500).json(err);
		}
	}
}

export default ChatConteoller;