import {Body, Controller, Get, Post, Query, Req, UseGuards} from '@nestjs/common';
import {UserService} from "../../shared/user/user.service";
import {CreateUserDto} from "./dto/create-user-dto";
import {PrismaService} from "../../prisma.service";
import {JwtAuthGuard} from "../../shared/auth/jwt-auth.guard";
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('admin/user')
export class UserController {

    constructor(
        private userService: UserService,
    ) {
    }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/list')
    async findAll() {
        return await this.userService.getAllUsers();
    }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post()
    async createUser(@Body() body: CreateUserDto) {
        return await this.userService.createUser(body);
    }

}
