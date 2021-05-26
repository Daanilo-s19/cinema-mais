import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cinema } from "../entities/cinema.entity";
import { CinemaRepository } from "../repositories/cinema.repository";

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(Cinema)
    private readonly cinemaRepository: CinemaRepository
  ) {}

  create(): Promise<Cinema> {
    const cinema = new Cinema();

    return this.cinemaRepository.save(cinema);
  }

  async findAll(): Promise<Cinema[]> {
    return this.cinemaRepository.find();
  }

  async findOne(id: number): Promise<Cinema | undefined> {
    return this.cinemaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cinemaRepository.delete(id);
  }
}
