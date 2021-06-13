import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { CreateTicketDto } from "../dto/create-ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerHtml } from "../providers/ticket-viewer-html.provider";
import { TicketViewerStrategy } from "../providers/ticket-viewer-strategy.provider";
import { TicketViewerXml } from "../providers/ticket-viewer-xml.provider";
import { TicketViewerYaml } from "../providers/ticket-viewer-yaml.provider";
import { BuyTicketFacade } from "../services/buy-ticket-facade.service";
import { CancelTicketFacade } from "../services/cancel-ticket-facade.service";
import { TicketService } from "../services/ticket.service";

@Controller("ticket")
@UseInterceptors(ClassSerializerInterceptor)
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly buyTicketFacade: BuyTicketFacade,
    private readonly cancelTicketFacade: CancelTicketFacade,
    private moduleRef: ModuleRef
  ) {}
  @Post()
  create(@Body() ticketDto: CreateTicketDto): Promise<Ticket> {
    return this.buyTicketFacade.buy(ticketDto);
  }

  @Get()
  findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Ticket> {
    return this.ticketService.findOne(id);
  }

  @Get(":id/html")
  @Header("Content-Type", "text/html")
  async view(@Param("id", ParseIntPipe) id: number) {
    const ticket = await this.findOne(id);
    const ticketViewer: TicketViewerStrategy = this.moduleRef.get(
      TicketViewerHtml
    );

    return await ticketViewer.generate(ticket);
  }

  @Get(":id/xml")
  @Header("Content-Type", "application/xml")
  async viewXml(@Param("id", ParseIntPipe) id: number) {
    const ticket = await this.findOne(id);
    const ticketViewer: TicketViewerStrategy = this.moduleRef.get(
      TicketViewerXml
    );

    return await ticketViewer.generate(ticket);
  }

  @Get(":id/yaml")
  @Header("Content-Type", "application/yaml")
  async viewYaml(@Param("id", ParseIntPipe) id: number) {
    const ticket = await this.findOne(id);
    const ticketViewer: TicketViewerStrategy = this.moduleRef.get(
      TicketViewerYaml
    );

    return await ticketViewer.generate(ticket);
  }

  @Delete(":id")
  async cancelTicket(@Param("id", ParseIntPipe) id: number): Promise<void> {
    await this.cancelTicketFacade.cancel(id);
  }
}
