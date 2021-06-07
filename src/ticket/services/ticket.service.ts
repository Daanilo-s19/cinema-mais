import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TicketDto } from "../dto/ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketRepository } from "../repository/ticket.repository";

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: TicketRepository
  ) {}
  async create(ticketDto: TicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(ticketDto);
    return this.ticketRepository.save(ticket);
  }
  async update(id: number, ticketDto: TicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(ticketDto);
    await this.ticketRepository.update(id, ticket);
    return ticket;
  }
  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }
  async findOne(id: number): Promise<Ticket | undefined> {
    return this.ticketRepository.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.ticketRepository.delete(id);
  }
}
