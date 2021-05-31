import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { MovieRoom } from "../entities/movieRoom.entity";

@EntityRepository(MovieRoom)
export abstract class MovieRoomRepository extends BaseRepository<MovieRoom> {}
