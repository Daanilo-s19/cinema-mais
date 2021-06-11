import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { MovieDto } from "../dto/movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieRepository } from "../repository/movie.repository";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: MovieRepository
  ) {}
  async create(movieDto: MovieDto): Promise<Movie> {
    const ticket = this.movieRepository.create(movieDto);
    return this.movieRepository.save(ticket);
  }
  @Transactional()
  async update(id: number, movieDto: MovieDto): Promise<Movie> {
    const ticket = this.movieRepository.create(movieDto);
    await this.movieRepository.update(id, ticket);
    return ticket;
  }
  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }
  async findOne(id: number): Promise<Movie | undefined> {
    return this.movieRepository.findOne(id);
  }
  @Transactional()
  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
