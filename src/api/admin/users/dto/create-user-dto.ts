import {
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsPhoneNumber,
    Matches,
    MaxLength, MinLength,
    ValidationError, ValidatorConstraint
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {Constants} from "../../../../shared/constants";
import {Transform} from 'class-transformer';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @ApiProperty()
    @IsEmail()
    @MaxLength(50)
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(64)
    // Set password validation regex.
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {message: 'Password must be contain minimum a letter of lower [a-z] and a minimum of upper case and 8 character at least'})
    password: string;

    @ApiProperty()
    @IsNumber()
    @Transform(({value}) => parseInt(value))
    wallet: bigint;

    @ApiProperty()
    @IsPhoneNumber()
    @MaxLength(13)
    phoneNumber: string;

    @ApiProperty()
    // Set Iranian national code regex pattern.
    @Matches(Constants.PASSWORD_REGEX_PATTERN, {message: 'National code not valid! the national code must be iranian national code standard!'})
    @MaxLength(16)
    nationalCode: string;


    @ApiProperty()
    test: string
}
