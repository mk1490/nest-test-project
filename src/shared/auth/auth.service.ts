import {
    ClassSerializerInterceptor,
    Injectable,
    NotFoundException,
    UnauthorizedException,
    UseInterceptors
} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../../admin/users/dto/create-user-dto";
import {RegisterDto} from "./dto/register-dto";
import {Prisma} from "@prisma/client";
import {UserService} from "../user/user.service";
import {User} from '@prisma/client'
import {classToPlain} from "class-transformer";
import {use} from "passport";

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {
    }


    async validateUser(username: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: username
            }
        });
        // Check if user exists
        if (user == null)
            return new NotFoundException();

        const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const payload = {
                sub: user.id,
                username: user.email,
            };
            return {access_token: this.jwtService.sign(payload)};
        }
        throw new UnauthorizedException();
    }

    async registerUser(userPayload: RegisterDto): Promise<User> {
        const email: string = userPayload.email;
        const password: string = await bcrypt.hash(userPayload.password, 10);
        const phoneNumber: string = userPayload.phoneNumber;
        const user = await this.userService.createUser({
            email,
            password,
            phoneNumber
        });
        // Delete sensitive prop
        delete user.password;
        return user;
    }

    async getCurrentUserProfile(userId: any): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            },
        });
        // Delete sensitive prop
        delete user.password;
        return user;
    }

}
