import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthService } from './shared/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/auth/constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './shared/auth/jwt.strategy';
import { EnduserModule } from './api/enduser/enduser.module';
import { AuthController } from './shared/auth/auth.controller';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './api/admin/admin.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secretKey,
      signOptions: { expiresIn: '60m' },
    }),
    SharedModule,
    EnduserModule,
    AdminModule,
    RouterModule.register([
      {
        module: AdminModule,
        path: 'admin',
      },
      {
        module: EnduserModule,
        path: 'enduser',
      },
    ]),
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    PrismaService,
    AuthService,
    JwtStrategy,
  ],
})
export class AppModule {
}
