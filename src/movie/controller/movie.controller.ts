import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { MovieDto } from "../dto/movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieService } from "../services/movie.service";

@Controller("movie")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Post()
  create(@Body() movieDto: MovieDto): Promise<Movie> {
    return this.movieService.create(movieDto);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() movieDto: MovieDto): Promise<Movie> {
    return this.movieService.update(id, movieDto);
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Movie | undefined> {
    return this.movieService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.movieService.remove(id);
  }
}
