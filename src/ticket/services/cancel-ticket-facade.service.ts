import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TicketRepository } from "../repository/ticket.repository";
import { TicketService } from "./ticket.service";

@Injectable()
export class CancelTicketFacade {
  constructor(
    @InjectRepository(TicketRepository)
    private readonly ticketRepository: TicketRepository,
    private readonly ticketService: TicketService
  ) {}

  async cancel(id: number): Promise<void> {
    const ticket = await this.ticketService.findOne(id);

    if (ticket.session.alreadyStarted) {
      throw new ConflictException("movie session already started");
    }

    await this.ticketRepository.remove(ticket);
  }
}
