import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MovieRoomDto } from "../dto/movieRoom.dto";
import { MovieRoom } from "../entities/movieRoom.entity";
import { MovieRoomRepository } from "../repository/movieRoom.repository";

@Injectable()
export class MovieRoomService {
  constructor(
    @InjectRepository(MovieRoom)
    private readonly movieRoomRepository: MovieRoomRepository
  ) {}
  async createMovieRoom(movieRoomDto: MovieRoomDto): Promise<MovieRoomDto> {
    const movieRoom = this.movieRoomRepository.create();
    return this.movieRoomRepository.save(movieRoom);
  }
  async updateMovieRoom(
    id: number,
    movieRoomDto: MovieRoomDto
  ): Promise<MovieRoomDto> {
    const movieRoom = this.movieRoomRepository.create();
    movieRoom.capacity = movieRoomDto.capacity;
    movieRoom.id = movieRoomDto.id;
    this.movieRoomRepository.update(id, movieRoom);
    return movieRoom;
  }
  async findAll(): Promise<MovieRoom[]> {
    return this.movieRoomRepository.find();
  }
  async findOne(id: number): Promise<MovieRoom | undefined> {
    return this.movieRoomRepository.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.movieRoomRepository.delete(id);
  }
}
