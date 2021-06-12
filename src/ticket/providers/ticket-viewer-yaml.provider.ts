import { Injectable } from "@nestjs/common";
import transformer from "class-transformer";
import yaml from "js-yaml";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";

@Injectable()
export class TicketViewerYaml implements TicketViewerStrategy {
  generate(ticket: Ticket): Promise<string> {
    return Promise.resolve(yaml.dump(transformer.classToPlain(ticket)));
  }
}
