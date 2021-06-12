import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateMovieRoomDto } from "../dto/create-movie-room-dto";
import { UpdateMovieRoomDto } from "../dto/update-movie-room.dto";
import { MovieRoom3d } from "../entities/movie-room-3d.entity";
import { MovieRoom } from "../entities/movie-room.entity";
import { MovieRoomType } from "../enums/movie-room-type.enum";
import { MovieRoom3dRepository } from "../repository/movie-room-3d.repository";
import { MovieRoomRepository } from "../repository/movie-room.repository";

@Injectable()
export class MovieRoomService {
  constructor(
    @InjectRepository(MovieRoomRepository)
    private readonly movieRoomRepository: MovieRoomRepository,
    @InjectRepository(MovieRoom3dRepository)
    private readonly movieRoom3dRepository: MovieRoom3dRepository
  ) {}

  @Transactional()
  async createMovieRoom(movieRoomDto: CreateMovieRoomDto): Promise<MovieRoom> {
    return movieRoomDto.tools
      ? await this.movieRoom3dRepository.save(movieRoomDto)
      : await this.movieRoomRepository.save(movieRoomDto);
  }

  @Transactional()
  async updateMovieRoom(
    id: number,
    movieRoomDto: UpdateMovieRoomDto
  ): Promise<MovieRoom> {
    let movieRoom = await this.findOne(id);
    if (movieRoom instanceof MovieRoom3d) {
      movieRoom = this.movieRoom3dRepository.merge(movieRoom, movieRoomDto);
      return this.movieRoom3dRepository.save(movieRoom);
    } else {
      movieRoom = this.movieRoomRepository.merge(movieRoom, movieRoomDto);
      return this.movieRoomRepository.save(movieRoom);
    }
  }

  async findAll(): Promise<MovieRoom[]> {
    return this.movieRoomRepository.find();
  }

  @Transactional()
  async findOne(id: number): Promise<MovieRoom> {
    const result = await this.movieRoomRepository.findOne({
      select: ["type"],
      where: { id },
    });
    if (!result) throw new NotFoundException();

    return (result.type === MovieRoomType.MovieRoom
      ? await this.movieRoomRepository.findOne(id)
      : await this.movieRoom3dRepository.findOne(id))!;
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.movieRoomRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }
}