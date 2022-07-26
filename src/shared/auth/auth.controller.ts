import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {Request} from 'express';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login-dto";
import {RegisterDto} from "./dto/register-dto";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {User as UserModel} from "@prisma/client";

@Controller('auth')
export class AuthController {


    constructor(
        private readonly authService: AuthService,
    ) {
    }

    @ApiTags("Authentication")
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.validateUser(loginDto.username, loginDto.password);
    }


    @ApiTags("Authentication")
    @Post('register')
    async register(@Body() registerDto: RegisterDto): Promise<UserModel> {
        return await this.authService.registerUser(registerDto);
    }


    @ApiTags("Account")
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('profile')
    async getProfile(@Req() request: Request) {
        await this.authService.getCurrentUserProfile(request.user['userId'])
    }

}
