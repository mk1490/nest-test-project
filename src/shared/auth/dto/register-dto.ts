import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsPhoneNumber, Matches, MaxLength} from "class-validator";
import {Constants} from "../../../shared/constants";

export class RegisterDto {

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsPhoneNumber()
    @MaxLength(13)
    phoneNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    // @Matches(Constants.PASSWORD_REGEX_PATTERN, {message: 'Password must be contain minimum a letter of lower [a-z] and a minimum of upper case and 8 character at least'})
    password: string;
}
