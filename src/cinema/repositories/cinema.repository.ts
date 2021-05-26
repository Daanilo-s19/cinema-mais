import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { Cinema } from "../entities/cinema.entity";
import { CinemaDto } from "../dto/cinema.dto";
import { EntityRepository } from "typeorm";

@EntityRepository(Cinema)
export abstract class CinemaRepository extends BaseRepository<Cinema> {
  abstract createCinema(cinemaDto: CinemaDto): Promise<CinemaDto>;
  abstract updateCinema(cinemaDto: CinemaDto, id: Number): Promise<CinemaDto>;
  abstract deleteCinema(id: Number): Promise<CinemaDto>;
  abstract getAll(): CinemaDto[];
  abstract findCinema(): Promise<CinemaDto>;
}
