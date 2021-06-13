import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  BadRequestException,
} from "@nestjs/common";
import { SessionPriceService } from "../session-price.service";
import { CreateSessionPriceDto } from "../dtos/create-session-price.dto";
import { SessionPrice } from "../entities/session-price.entity";

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

  @Get(":date")
  findOne(@Param("date") dateStr: string): Promise<SessionPrice> {
    const date = new Date(dateStr);
    if (!date) {
      throw new BadRequestException(dateStr, "must be an valid date string");
    }
    return this.sessionPriceService.findByDate(date);
  }
}
