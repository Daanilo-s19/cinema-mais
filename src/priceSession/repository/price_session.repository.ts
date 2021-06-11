import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { PriceSession } from "../entities/price_session.entity";

@EntityRepository(PriceSession)
export abstract class PriceSessionRepository extends BaseRepository<PriceSession> {}
