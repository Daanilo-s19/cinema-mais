import { MovieRoomService } from "./services/movieRoom.service";
import { MovieRoomController } from "./controller/movieRoom.controller";
import { Module } from "@nestjs/common";
import { MovieRoomRepository } from "./repository/movieRoom.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([MovieRoomRepository])],
  controllers: [MovieRoomController],
  providers: [MovieRoomService],
})
export class MovieRoomModule {}
