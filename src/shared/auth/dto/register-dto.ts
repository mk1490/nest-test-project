import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsPhoneNumber} from "class-validator";

export class RegisterDto {

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsPhoneNumber()
    phoneNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}
