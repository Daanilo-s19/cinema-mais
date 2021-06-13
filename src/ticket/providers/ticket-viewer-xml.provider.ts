import * as transformer from "class-transformer";
import * as xmlParser from "jstoxml";

import { Injectable } from "@nestjs/common";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";

@Injectable()
export class TicketViewerXml implements TicketViewerStrategy {
  generate(ticket: Ticket): Promise<string> {
    return Promise.resolve(
      xmlParser.toXML(transformer.classToPlain({ ticket }))
    );
  }
}
