export enum ChatType {
  PUBLIC= 'public',
  PRIVATE= 'private',
  PROTECTED= 'protected',
}

export type User = {
  id:            string
  firstName?:     string
  lastName?:      string
  username:      string
  email?:         string
  cover?:         string
  avatar?:         string
  twoFactorAuth?: boolean
  channels:      Channel[]
};

export type Message = {
  id: string
  content: string
  channelId: string
  userId: string
  createdAt?: Date
}

export type Channel = {
  id: string
  name: string
  directMessage: boolean
  type: ChatType
  moderatorId: string
  createdAt: Date
  messages: Message[]
  members: User[]
  memberCount: number
  memberLimit: number
}