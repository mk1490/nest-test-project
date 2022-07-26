import {Body, Controller, Get, Post, Request} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthService} from "./shared/auth/auth.service";
import {JwtService} from "@nestjs/jwt";
import {ApiTags} from "@nestjs/swagger";

@Controller()
export class AppController {

    constructor(
        private readonly appService: AppService,
    ) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

}
