-- CreateEnum
CREATE TYPE "USER_STATUS" AS ENUM ('online', 'offline', 'in_game');

-- CreateEnum
CREATE TYPE "NOTIF_TYPE" AS ENUM ('MESSAGE', 'GAME_REQUEST', 'FRIEND_REQUEST');

-- CreateEnum
CREATE TYPE "STATE" AS ENUM ('BLOCKED', 'PENDING', 'ACCEPTED', 'REFUSED');

-- CreateEnum
CREATE TYPE "MODE" AS ENUM ('CLASSIC', 'RANKED');

-- CreateEnum
CREATE TYPE "Map" AS ENUM ('map1', 'map2');

-- CreateEnum
CREATE TYPE "ROOM_TYPE" AS ENUM ('PRIVATE', 'PUBLIC', 'PROTECTED');

-- CreateEnum
CREATE TYPE "USER_STATUS_GROUP" AS ENUM ('MUTED', 'UNMUTED', 'BANNED');

-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "towFactorAuth" BOOLEAN NOT NULL DEFAULT false,
    "otpCode" TEXT,
    "phoneNumber" TEXT,
    "userstatus" "USER_STATUS" NOT NULL DEFAULT 'offline',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friend" (
    "id" TEXT NOT NULL,
    "state" "STATE" NOT NULL,
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friendship" (
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("userId","friendId")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "notftype" "NOTIF_TYPE" NOT NULL DEFAULT 'MESSAGE',

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "userScore" INTEGER NOT NULL,
    "opponentScore" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" TEXT NOT NULL,
    "vectories" INTEGER NOT NULL,
    "defeats" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opponent" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "opponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "historyId" TEXT,
    "opponentId" TEXT NOT NULL,
    "mode" "MODE" NOT NULL,
    "map" "Map" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roomChat" (
    "id" TEXT NOT NULL,
    "type" "ROOM_TYPE" NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "roomChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomChatConversation" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "usertstatus" "USER_STATUS_GROUP" NOT NULL,
    "userRole" "USER_ROLE" NOT NULL,

    CONSTRAINT "RoomChatConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "idSender" TEXT NOT NULL,
    "roomChatId" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "conversation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_key" ON "User"("firstName");

-- CreateIndex
CREATE UNIQUE INDEX "User_lastName_key" ON "User"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "History_gameId_key" ON "History"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "logs_userId_key" ON "logs"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_historyId_key" ON "Game"("historyId");

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "Friend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "opponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomChatConversation" ADD CONSTRAINT "RoomChatConversation_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "roomChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomChatConversation" ADD CONSTRAINT "RoomChatConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation" ADD CONSTRAINT "conversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
