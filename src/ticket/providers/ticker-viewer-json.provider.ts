import { Injectable } from "@nestjs/common";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerStrategy } from "./ticket-viewer-strategy.provider";

@Injectable()
export class TicketViewerJson implements TicketViewerStrategy {
  generate(ticket: Ticket): Promise<string> {
    return Promise.resolve(
      JSON.stringify({
        price: ticket.price,
        customer: ticket.customer,
        session: ticket.session,
      })
    );
  }
}
