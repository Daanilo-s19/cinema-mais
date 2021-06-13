import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MovieRoomFactoryDto } from "../dto/movie-room-factory.dto";
import { MovieRoom } from "../entities/movie-room.entity";
import { MovieRoomType } from "../enums/movie-room-type.enum";
import { MovieRoom3dRepository } from "../repository/movie-room-3d.repository";
import { MovieRoomRepository } from "../repository/movie-room.repository";

@Injectable()
export class MovieRoomFactory {
  constructor(
    @InjectRepository(MovieRoomRepository)
    private readonly movieRoomRepository: MovieRoomRepository,
    @InjectRepository(MovieRoom3dRepository)
    private readonly movieRoom3dRepository: MovieRoom3dRepository
  ) {}

  async getMovieRoom(
    factoryDto: MovieRoomFactoryDto
  ): Promise<MovieRoom | undefined> {
    switch (factoryDto.type) {
      case MovieRoomType.MovieRoom3d:
        return this.movieRoom3dRepository.findOne(factoryDto.id);
      default:
        return this.movieRoomRepository.findOne(factoryDto.id);
    }
  }
}
