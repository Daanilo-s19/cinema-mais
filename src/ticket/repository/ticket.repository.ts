import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { Ticket } from "../entities/ticket.entity";

@EntityRepository(Ticket)
export abstract class TicketRepository extends BaseRepository<Ticket> {}
