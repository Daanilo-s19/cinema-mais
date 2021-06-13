import * as transformer from "class-transformer";
import * as xmlParser from "xml2json";

import { Injectable } from "@nestjs/common";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";

@Injectable()
export class TicketViewerXml implements TicketViewerStrategy {
  generate(ticket: Ticket): Promise<string> {
    return Promise.resolve(
      xmlParser
        .toXml(transformer.classToPlain(ticket), { ignoreNull: true })
        .toString()
    );
  }
}
