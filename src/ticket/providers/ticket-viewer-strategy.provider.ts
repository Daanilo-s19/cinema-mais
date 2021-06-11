import { Ticket } from "../entities/ticket.entity";

export abstract class TicketViewerStrategy {
  abstract generate(ticket: Ticket): Promise<string>;
}
