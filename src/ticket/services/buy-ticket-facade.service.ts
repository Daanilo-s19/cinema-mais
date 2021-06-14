import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";

import { CustomerService } from "src/customer/services/customer.service";
import { SessionService } from "src/session/services/session.service";
import { CreateTicketDto } from "../dto/create-ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketRepository } from "../repository/ticket.repository";
import { Student } from "src/customer/entities/student.entity";
import { Session } from "src/session/entities/session.entity";

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

    if (customer instanceof Student) {
      await this.checkStudentBoughtOthers(customer, session);
    }

    const price =
      session.priceWithRoomPercentage() * customer.getDiscountPercentage();

    return await this.ticketRepository.save(
      this.ticketRepository.create({
        session,
        customer,
        price,
      })
    );
  }

  private async checkStudentBoughtOthers(
    student: Student,
    session: Session
  ): Promise<void> {
    const hasBoughtOthers = Boolean(
      await this.ticketRepository.count({ customer: student, session })
    );
    if (hasBoughtOthers) {
      throw new ConflictException("student can not buy two tickets");
    }
  }
}
