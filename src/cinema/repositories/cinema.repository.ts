import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { Cinema } from "../entities/cinema.entity";

export class CinemaRepository extends BaseRepository<Cinema> {}
