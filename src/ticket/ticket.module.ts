import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SessionModule } from "src/session/session.module";
import { CustomerModule } from "src/customer/customer.module";

import { TicketService } from "./services/ticket.service";
import { TicketController } from "./controller/ticket.controller";
import { TicketRepository } from "./repository/ticket.repository";
import { TicketViewerHtml } from "./providers/ticket-viewer-html.provider";
import { TicketViewerXml } from "./providers/ticket-viewer-xml.provider";
import { TicketViewerYaml } from "./providers/ticket-viewer-yaml.provider";

import { BuyTicketFacade } from "./services/buy-ticket-facade.service";
import { CancelTicketFacade } from "./services/cancel-ticket-facade.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketRepository]),
    SessionModule,
    CustomerModule,
  ],
  controllers: [TicketController],
  providers: [
    TicketService,
    TicketViewerHtml,
    TicketViewerXml,
    TicketViewerYaml,
    BuyTicketFacade,
    CancelTicketFacade,
  ],
})
export class TicketModule {}
