export enum ChannelType {
	PRIVATE = 'PRIVATE',
	PUBLIC = 'PUBLIC',
	PROTECTED = 'PROTECTED'
}

export type User = {
	id : number
	firstName? : string
	lastName? : string
	username? : string
	email? : string
	cover? : string
	avatar? : string
	twoFactorAuth? : boolean
	userStatus : string
	channels? : Channel[]
	messages? : Message[]
}

export type Message = {
	id : number
	content : string
	createdAt : Date
	updatedAt : Date
	userId : number
	channelId : number
}

export type Channel = {
	id : number
	name : string
	directMessage : boolean
	type : ChannelType
	createdAt : Date
	updatedAt : Date
	users : User[]
	messages : Message[]
}