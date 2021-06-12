import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { Cinema } from "../entities/cinema.entity";
import { EntityRepository } from "typeorm";

@EntityRepository(Cinema)
export class CinemaRepository extends BaseRepository<Cinema> {}
