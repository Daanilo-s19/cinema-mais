import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { MovieRoom } from "../entities/movie-room.entity";

@EntityRepository(MovieRoom)
export class MovieRoomRepository extends BaseRepository<MovieRoom> {}
