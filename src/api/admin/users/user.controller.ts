import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import {UserService} from '../../../shared/user/user.service';
import {CreateUserDto} from './dto/create-user-dto';
import {JwtAuthGuard} from '../../../shared/auth/jwt-auth.guard';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
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
        console.log("Create user", body)
        return await this.userService.createUser(body);
    }

    @Delete(':userId')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async deleteUser(@Param('userId') userId: number) {
        return await this.userService.deleteUser(userId);
    }
}
