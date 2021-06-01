import { SessionService } from "./services/session.service";
import { SessionController } from "./controller/session.controller";
import { Module } from "@nestjs/common";
import { SessionRepository } from "./repository/session.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SessionRepository])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
