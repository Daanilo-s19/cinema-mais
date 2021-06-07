import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { TicketDto } from "../dto/ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketRepository } from "../repository/ticket.repository";
import { TicketService } from "../services/ticket.service";

@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Post()
  create(@Body() ticketDto: TicketDto): Promise<Ticket> {
    return this.ticketService.create(ticketDto);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() ticketDto: TicketDto
  ): Promise<Ticket> {
    return this.ticketService.update(id, ticketDto);
  }

  @Get()
  findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Ticket | undefined> {
    return this.ticketService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.ticketService.remove(id);
  }
}
