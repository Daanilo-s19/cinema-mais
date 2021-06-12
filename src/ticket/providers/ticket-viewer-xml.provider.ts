import { Injectable } from "@nestjs/common";
import transform from "class-transformer";
import xmlParser from "xml2json";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";

@Injectable()
export class TicketViewerXml implements TicketViewerStrategy {
  generate(ticket: Ticket): Promise<string> {
    return Promise.resolve(
      xmlParser
        .toXml(transform.classToPlain(ticket), { ignoreNull: true })
        .toString()
    );
  }
}
