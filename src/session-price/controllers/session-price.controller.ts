import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { SessionPriceService } from "../session-price.service";
import { CreateSessionPriceDto } from "../dtos/create-session-price.dto";

@Controller("session-price")
export class SessionPriceController {
  constructor(private readonly sessionPriceService: SessionPriceService) {}

  @Post()
  create(@Body() createSessionPriceDto: CreateSessionPriceDto) {
    return this.sessionPriceService.create(createSessionPriceDto);
  }

  @Get()
  findAll() {
    return this.sessionPriceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.sessionPriceService.findOne(+id);
  }
}
