import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { TicketDto } from "../dto/ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketRepository } from "../repository/ticket.repository";

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: TicketRepository
  ) {}
  @Transactional()
  async create(ticketDto: TicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(ticketDto);
    return this.ticketRepository.save(ticket);
  }
  @Transactional()
  async update(id: number, ticketDto: TicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(ticketDto);
    await this.ticketRepository.update(id, ticket);
    return ticket;
  }
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
  @Transactional()
  async remove(id: number): Promise<void> {
    await this.ticketRepository.delete(id);
  }
}
