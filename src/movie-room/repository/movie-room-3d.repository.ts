import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { MovieRoom3d } from "../entities/movie-room-3d.entity";

@EntityRepository(MovieRoom3d)
export class MovieRoom3dRepository extends BaseRepository<MovieRoom3d> {}
