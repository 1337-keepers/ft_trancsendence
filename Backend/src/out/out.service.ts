import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class OutService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async deleteUser(id: string): Promise<User> {
        return this.prisma.user.delete({ where: { id } });
    }
}
