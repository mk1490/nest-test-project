import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserController} from './admin/users/user.controller';
import {PrismaService} from './prisma.service';
import {AuthService} from "./shared/auth/auth.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./shared/auth/constants";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./shared/auth/jwt.strategy";
import {EnduserModule} from './enduser/enduser.module';
import {AuthController} from './shared/auth/auth.controller';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secretKey,
            signOptions: {expiresIn: '60m'},
        }),
        SharedModule,
        EnduserModule,
        AdminModule,
    ],
    controllers: [AppController, AuthController],
    providers: [
        AppService,
        // UserService,
        PrismaService,
        AuthService,
        JwtStrategy
    ],
})
export class AppModule {
}
