import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersController} from './admin/users/users.controller';

@Module({
    imports: [],
    controllers: [AppController, UsersController],
    providers: [AppService],
})
export class AppModule {
}
