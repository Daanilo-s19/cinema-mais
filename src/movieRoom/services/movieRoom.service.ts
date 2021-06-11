import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SessionService } from "src/session/services/session.service";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { MovieRoomDto } from "../dto/movieRoom.dto";
import { MovieRoom } from "../entities/movieRoom.entity";
import { MovieRoomRepository } from "../repository/movieRoom.repository";

@Injectable()
export class MovieRoomService {
  constructor(
    @InjectRepository(MovieRoom)
    private readonlySession: SessionService,
    private readonly movieRoomRepository: MovieRoomRepository
  ) {}
  async createMovieRoom(movieRoomDto: MovieRoomDto): Promise<MovieRoom> {
    const movieRoom = this.movieRoomRepository.create(movieRoomDto);
    return this.movieRoomRepository.save(movieRoom);
  }
  @Transactional()
  async updateMovieRoom(
    id: number,
    movieRoomDto: MovieRoomDto
  ): Promise<MovieRoom> {
    const movieRoom = this.movieRoomRepository.create(movieRoomDto);
    await this.movieRoomRepository.update(id, movieRoom);
    return movieRoom;
  }
  async findAll(): Promise<MovieRoom[]> {
    return this.movieRoomRepository.find();
  }
  async findOne(id: number): Promise<MovieRoom | undefined> {
    return this.movieRoomRepository.findOne(id);
  }
  @Transactional()
  async remove(id: number): Promise<void> {
    await this.movieRoomRepository.delete(id);
  }
}
