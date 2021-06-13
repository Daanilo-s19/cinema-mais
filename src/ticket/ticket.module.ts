import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TicketService } from "./services/ticket.service";
import { TicketController } from "./controller/ticket.controller";
import { TicketRepository } from "./repository/ticket.repository";
import { TicketViewerHtml } from "./providers/ticket-viewer-html.provider";
import { TicketViewerJson } from "./providers/ticker-viewer-json.provider";
import { TicketViewerXml } from "./providers/ticket-viewer-xml.provider";
import { TicketViewerYaml } from "./providers/ticket-viewer-yaml.provider";
import { BuyTicketFacade } from "./services/create-ticket-facade.service";
import { SessionModule } from "src/session/session.module";
import { CustomerModule } from "src/customer/customer.module";

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
    TicketViewerJson,
    TicketViewerXml,
    TicketViewerYaml,
    BuyTicketFacade,
  ],
})
export class TicketModule {}
