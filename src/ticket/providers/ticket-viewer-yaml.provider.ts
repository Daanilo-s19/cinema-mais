import * as transformer from "class-transformer";
import * as yaml from "js-yaml";

import { Injectable } from "@nestjs/common";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";

@Injectable()
export class TicketViewerYaml implements TicketViewerStrategy {
  generate(ticket: Ticket): Promise<string> {
    return Promise.resolve(yaml.dump(transformer.classToPlain(ticket)));
  }
}
