import { SessionService } from "./services/session.service";
import { SessionController } from "./controller/session.controller";
import { Module } from "@nestjs/common";
import { SessionRepository } from "./repository/session.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SessionPriceModule } from "src/session-price/session-price.module";
import { MovieRoomModule } from "src/movie-room/movie-room.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionRepository]),
    SessionPriceModule,
    MovieRoomModule,
  ],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
