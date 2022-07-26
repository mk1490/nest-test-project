import {Module} from '@nestjs/common';
import {UserService} from "./user/user.service";
import {PrismaService} from "../prisma.service";

@Module({
    imports: [],
    providers: [PrismaService, UserService],
    controllers: [],
    exports: [UserService]
})
export class SharedModule {
}
