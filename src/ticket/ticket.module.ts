import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TicketService } from "./services/ticket.service";
import { TicketController } from "./controller/ticket.controller";
import { TicketRepository } from "./repository/ticket.repository";
import { TicketViewerHtml } from "./providers/ticket-viewer-html.provider";
import { TicketViewerJson } from "./providers/ticker-viewer-json.provider";

@Module({
  imports: [TypeOrmModule.forFeature([TicketRepository])],
  controllers: [TicketController],
  providers: [TicketService, TicketViewerHtml, TicketViewerJson],
})
export class TicketModule {}
