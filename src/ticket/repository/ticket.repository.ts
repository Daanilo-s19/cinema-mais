import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { Ticket } from "../entities/ticket.entity";

@EntityRepository(Ticket)
export abstract class TicketRepository extends BaseRepository<Ticket> {
  async getTicket(id: number): Promise<Ticket | undefined> {
    const query = this.createQueryBuilder("ticket");

    query
      .innerJoinAndSelect("ticket.customer", "customer")
      .innerJoinAndSelect("ticket.session", "session")
      .innerJoinAndSelect("session.room", "room")
      .innerJoinAndSelect("session.movie", "movie")
      .where("ticket.id = :id", { id });

    return query.getOne();
  }
}
