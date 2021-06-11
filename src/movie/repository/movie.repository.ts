import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { Movie } from "../entities/movie.entity";

@EntityRepository(Movie)
export abstract class MovieRepository extends BaseRepository<Movie> {}
