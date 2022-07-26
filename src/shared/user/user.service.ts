import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        phoneNumber: true,
        email: true,
        name: true,
        wallet: true,
        nationalCode: true,
      },
    });
  }

  async createUser(data: any) {
    // Check user if exists by email address.
    const user = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (user) throw new BadRequestException('Email already exists in system');

    // Hash password.
    data.password = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data,
    });
  }

  async findUserById(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new NotFoundException();
    // Delete sensitive prop
    delete user.password;
    return user;
  }

  async deleteUser(userId: number) {
    userId = +userId; // Change user id string from request form to userid number
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) throw new NotFoundException();
    this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
