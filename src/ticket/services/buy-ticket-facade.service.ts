import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerService } from "src/customer/services/customer.service";
import { SessionService } from "src/session/services/session.service";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateTicketDto } from "../dto/create-ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketRepository } from "../repository/ticket.repository";

@Injectable()
export class BuyTicketFacade {
  constructor(
    @InjectRepository(TicketRepository)
    private readonly ticketRepository: TicketRepository,
    private readonly sessionService: SessionService,
    private readonly customerService: CustomerService
  ) {}

  @Transactional()
  async buy(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const session = await this.sessionService.findOne(
      createTicketDto.sessionId
    );

    if (session.alreadyStarted) {
      throw new ConflictException("session already started");
    }

    if (!session.hasRemainingSeats) {
      throw new ConflictException("no remaining seats");
    }

    const customer = await this.customerService.findOne(
      createTicketDto.customerId
    );

    return await this.ticketRepository.save(
      this.ticketRepository.create({
        session,
        customer,
      })
    );
  }
}
