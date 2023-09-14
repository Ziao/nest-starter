import { User } from '@prisma/client';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prismaService: PrismaService) {
        super({
            usernameField: 'username',
            passwordField: 'password',
            // session: false,
        });
    }

    /**
     * Validate login credentials, return user if valid, null if not
     * @param username
     * @param password
     */
    async validate(username: string, password: string): Promise<User | null> {
        const user = await this.prismaService.user.findFirst({
            where: {
                username: username,
                password: password, // todo: hash
            },
        });

        if (user) return user;

        throw new UnauthorizedException();
    }
}
