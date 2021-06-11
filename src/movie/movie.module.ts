import { Module } from "@nestjs/common";
import { MovieRepository } from "./repository/movie.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "./controller/movie.controller";
import { MovieService } from "./services/movie.service";

@Module({
  imports: [TypeOrmModule.forFeature([MovieRepository])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
