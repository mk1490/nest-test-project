import {Module} from '@nestjs/common';
import {UserController} from './user/user.controller';
import {UserService} from "../shared/user/user.service";
import {SharedModule} from "../shared/shared.module";

@Module({
    imports: [SharedModule],
    controllers: [UserController],
    providers: []
})
export class EnduserModule {
}
