import { Injectable, NotImplementedException } from "@nestjs/common";
import { CustomerService } from "src/customer/services/customer.service";
import { SessionService } from "src/session/services/session.service";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateTicketDto } from "../dto/create-ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketService } from "./ticket.service";

@Injectable()
export class BuyTicketFacade {
  constructor(
    private readonly ticketService: TicketService,
    private readonly sessionService: SessionService,
    private readonly customerService: CustomerService
  ) {}

  @Transactional()
  buy(createTicketDto: CreateTicketDto): Promise<Ticket> {
    throw new NotImplementedException();
  }
}
