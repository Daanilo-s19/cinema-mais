import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateMovieRoomDto } from "../dto/create-movie-room-dto";
import { UpdateMovieRoomDto } from "../dto/update-movie-room.dto";
import { MovieRoom } from "../entities/movie-room.entity";
import { MovieRoomService } from "../services/movie-room.service";

@Controller("movie-room")
export class MovieRoomController {
  constructor(private readonly movieRoomService: MovieRoomService) {}

  @Post()
  create(@Body() movieRoomDto: CreateMovieRoomDto): Promise<MovieRoom> {
    return this.movieRoomService.createMovieRoom(movieRoomDto);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() movieRoomDto: UpdateMovieRoomDto
  ): Promise<MovieRoom> {
    return this.movieRoomService.updateMovieRoom(id, movieRoomDto);
  }

  @Get()
  findAll(): Promise<MovieRoom[]> {
    return this.movieRoomService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<MovieRoom | undefined> {
    return this.movieRoomService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.movieRoomService.remove(id);
  }
}
