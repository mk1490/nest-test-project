import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsPhoneNumber,
    Matches,
    MaxLength, ValidationError
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
    @MaxLength(13)
    // Convert persian digits to latin digits.
    @Transform(({value}) => value.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    @Matches(Constants.PHONE_NUMBER_REGEX_PATTERN)
    phoneNumber: string;

    @ApiProperty()
    // Set Iranian national code regex pattern.
    @Matches(Constants.NATIONAL_CODE_REGEX_PATTERN, {message: 'National code not valid! the national code must be iranian national code standard!'})
    @MaxLength(16)
    nationalCode: string;
}
