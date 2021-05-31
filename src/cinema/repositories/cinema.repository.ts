import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { Cinema } from "../entities/cinema.entity";
import { EntityRepository } from "typeorm";

@EntityRepository(Cinema)
export abstract class CinemaRepository extends BaseRepository<Cinema> {}
