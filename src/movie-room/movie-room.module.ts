import { MovieRoomService } from "./services/movie-room.service";
import { MovieRoomController } from "./controller/movie-room.controller";
import { Module } from "@nestjs/common";
import { MovieRoomRepository } from "./repository/movie-room.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieRoom3dRepository } from "./repository/movie-room-3d.repository";

@Module({
  imports: [TypeOrmModule.forFeature([MovieRoomRepository, MovieRoom3dRepository])],
  controllers: [MovieRoomController],
  providers: [MovieRoomService],
})
export class MovieRoomModule {}
