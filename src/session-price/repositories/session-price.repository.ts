import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { SessionPrice } from "../entities/session-price.entity";

@EntityRepository(SessionPrice)
export class SessionPriceRepository extends BaseRepository<SessionPrice> {}
