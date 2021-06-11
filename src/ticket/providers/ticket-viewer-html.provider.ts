import Mustache from "mustache";
import * as fs from "fs";

import { Injectable } from "@nestjs/common";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";
import { HTML_TEMPLATE_PATH } from "../ticket.constants";

@Injectable()
export class TicketViewerHtml implements TicketViewerStrategy {
  async generate(ticket: Ticket): Promise<string> {
    const template = fs.readFileSync(HTML_TEMPLATE_PATH, "utf-8");
    return Mustache.render(template, { ...ticket });
  }
}