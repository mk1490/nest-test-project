import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";
import {Transform} from "class-transformer";

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}
