import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../../../shared/user/user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findUserById(@Param('id') userId: number) {
    return this.userService.findUserById(userId);
  }
}
