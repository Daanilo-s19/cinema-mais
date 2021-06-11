import { TicketService } from "./services/ticket.service";
import { TicketController } from "./controller/ticket.controller";
import { Module } from "@nestjs/common";
import { TicketRepository } from "./repository/ticket.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([TicketRepository])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
