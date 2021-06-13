import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ticket } from "../entities/ticket.entity";
import { TicketRepository } from "../repository/ticket.repository";

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: TicketRepository
  ) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne(id);
    if (!ticket) {
      throw new NotFoundException();
    }

    return ticket;
  }
}
