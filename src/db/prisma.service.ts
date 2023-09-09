import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        // Not technically needed as Prisma will lazily connect automatically, but it's good practice to be explicit
        await this.$connect();
    }
}
