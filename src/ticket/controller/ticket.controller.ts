import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Response } from "express";
import { CreateTicketDto } from "../dto/create-ticket.dto";
import { Ticket } from "../entities/ticket.entity";
import { TicketViewerJson } from "../providers/ticker-viewer-json.provider";
import { TicketViewerHtml } from "../providers/ticket-viewer-html.provider";
import { TicketViewerStrategy } from "../providers/ticket-viewer-strategy.provider";
import { TicketViewerXml } from "../providers/ticket-viewer-xml.provider";
import { TicketViewerYaml } from "../providers/ticket-viewer-yaml.provider";
import { BuyTicketFacade } from "../services/create-ticket-facade.service";
import { TicketService } from "../services/ticket.service";

@Controller("ticket")
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly buyTicketFacade: BuyTicketFacade,
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
  async view(@Param("id", ParseIntPipe) id: number, @Res() res: Response) {
    const ticket = await this.findOne(id);
    const ticketViewer: TicketViewerStrategy = this.moduleRef.get(
      TicketViewerHtml
    );

    res.setHeader("Content-Type", "text/html");

    return res.send(await ticketViewer.generate(ticket));
  }

  @Get(":id/xml")
  async viewXml(@Param("id", ParseIntPipe) id: number, @Res() res: Response) {
    const ticket = await this.findOne(id);
    const ticketViewer: TicketViewerStrategy = this.moduleRef.get(
      TicketViewerXml
    );

    res.setHeader("Content-Type", "application/xml");

    return res.send(await ticketViewer.generate(ticket));
  }

  @Get(":id/yaml")
  async viewYaml(@Param("id", ParseIntPipe) id: number, @Res() res: Response) {
    const ticket = await this.findOne(id);
    const ticketViewer: TicketViewerStrategy = this.moduleRef.get(
      TicketViewerYaml
    );

    res.setHeader("Content-Type", "text/yaml");

    return res.send(await ticketViewer.generate(ticket));
  }
}
