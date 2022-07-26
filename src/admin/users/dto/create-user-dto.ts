import {IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNumber()
    wallet: number;

    @ApiProperty()
    @IsPhoneNumber()
    phoneNumber: string;
}
