import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CinemaDto } from "../dto/cinema.dto";
import { Cinema } from "../entities/cinema.entity";
import { CinemaRepository } from "../repositories/cinema.repository";

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(Cinema)
    private readonly cinemaRepository: CinemaRepository
  ) {}

  async createCinema(cinemaDto: CinemaDto): Promise<Cinema> {
    const cinema = this.cinemaRepository.create();
    return this.cinemaRepository.save(cinema);
  }
  async updateCinema(id: number, cinemaDto: CinemaDto): Promise<Cinema> {
    const cinema = this.cinemaRepository.create();
    cinema.city = cinemaDto.city;
    cinema.name = cinemaDto.name;
    await this.cinemaRepository.update(id, cinema);
    return cinema;
  }

  async findAll(): Promise<Cinema[]> {
    return this.cinemaRepository.find();
  }

  async findOne(id: number): Promise<Cinema | undefined> {
    return this.cinemaRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cinemaRepository.delete(id);
  }
}
