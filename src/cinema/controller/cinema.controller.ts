import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CinemaDto } from "../dto/cinema.dto";
import { Cinema } from "../entities/cinema.entity";
import { CinemaService } from "../services/cinema.service";

@Controller("cinema")
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Post()
  create(@Body() cinemaDto: CinemaDto): Promise<Cinema> {
    return this.cinemaService.createCinema(cinemaDto);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() cinemaDto: CinemaDto
  ): Promise<Cinema> {
    return this.cinemaService.updateCinema(id, cinemaDto);
  }

  @Get()
  findAll(): Promise<Cinema[]> {
    return this.cinemaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Cinema | undefined> {
    return this.cinemaService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.cinemaService.remove(id);
  }
}
