import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { Session } from "../entities/session.entity";

@EntityRepository(Session)
export abstract class SessionRepository extends BaseRepository<Session> {}
