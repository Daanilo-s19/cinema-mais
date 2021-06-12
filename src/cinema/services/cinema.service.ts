import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CinemaDto } from "../dto/cinema.dto";
import { Cinema } from "../entities/cinema.entity";
import { CinemaRepository } from "../repositories/cinema.repository";
import { Transactional } from "typeorm-transactional-cls-hooked";

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(Cinema)
    private readonly cinemaRepository: CinemaRepository
  ) {}

  async createCinema(cinemaDto: CinemaDto): Promise<Cinema> {
    const cinema = this.cinemaRepository.create(cinemaDto);
    return this.cinemaRepository.save(cinema);
  }

  @Transactional()
  async updateCinema(id: number, cinemaDto: CinemaDto): Promise<Cinema> {
    let cinema = await this.findOne(id);
    cinema = this.cinemaRepository.merge(cinema, cinemaDto);
    await this.cinemaRepository.update(id, cinema);
    return cinema;
  }

  async findAll(): Promise<Cinema[]> {
    return this.cinemaRepository.find();
  }

  async findOne(id: number): Promise<Cinema> {
    const cinema = await this.cinemaRepository.findOne(id);
    if (!cinema) throw new NotFoundException();
    return cinema;
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.cinemaRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }
}
