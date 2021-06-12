import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { Session } from "../entities/session.entity";

@EntityRepository(Session)
export class SessionRepository extends BaseRepository<Session> {}
