import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieRepository } from "../repository/movie.repository";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: MovieRepository
  ) {}

  @Transactional()
  async create(movieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.movieRepository.create(movieDto);
    return await this.movieRepository.save(movie);
  }

  @Transactional()
  async update(id: number, movieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.findOne(id);
    return this.movieRepository.save(
      this.movieRepository.merge(movie, movieDto)
    );
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne(id);
    if (!movie) throw new NotFoundException();
    return movie;
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.movieRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }
}
