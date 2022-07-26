import {Module} from '@nestjs/common';
import {UserService} from "../shared/user/user.service";
import {SharedModule} from "../shared/shared.module";
import {UserController} from "./users/user.controller";

@Module({
    imports: [SharedModule],
    controllers: [UserController],
    providers: [],
})
export class AdminModule {
}
