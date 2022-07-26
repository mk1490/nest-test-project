import { Module } from '@nestjs/common';
import { SharedModule } from '../../shared/shared.module';
import { UserController } from './users/user.controller';

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  providers: [],
})
export class AdminModule {}
