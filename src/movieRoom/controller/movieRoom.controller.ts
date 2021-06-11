import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { MovieRoom } from "src/movieRoom/entities/movieRoom.entity";
import { MovieRoomDto } from "../dto/movieRoom.dto";
import { MovieRoomService } from "../services/movieRoom.service";

@Controller("movieRoom")
export class MovieRoomController {
  constructor(private readonly movieRoomService: MovieRoomService) {}

  @Post()
  create(@Body() movieRoomDto: MovieRoomDto): Promise<MovieRoom> {
    return this.movieRoomService.createMovieRoom(movieRoomDto);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() movieRoomDto: MovieRoomDto
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
