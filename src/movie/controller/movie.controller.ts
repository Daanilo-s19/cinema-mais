import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieService } from "../services/movie.service";

@Controller("movie")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Post()
  create(@Body() movieDto: CreateMovieDto): Promise<Movie> {
    return this.movieService.create(movieDto);
  }

  @Put(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() movieDto: UpdateMovieDto
  ): Promise<Movie> {
    return this.movieService.update(id, movieDto);
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Movie | undefined> {
    return this.movieService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.movieService.remove(id);
  }
}
