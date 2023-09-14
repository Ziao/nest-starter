import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
}
