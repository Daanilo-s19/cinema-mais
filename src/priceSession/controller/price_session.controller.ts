import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { PriceSessionDto } from "../dto/price_session.dto";
import { PriceSession } from "../entities/price_session.entity";
import { PriceSessionService } from "../services/price_session.service";

@Controller("priceSession")
export class PriceSessionController {
  constructor(private readonly priceSessionService: PriceSessionService) {}
  @Post()
  create(@Body() priceSessionDto: PriceSessionDto): Promise<PriceSession> {
    return this.priceSessionService.create(priceSessionDto);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() priceSessionDto: PriceSessionDto
  ): Promise<PriceSession> {
    return this.priceSessionService.update(id, priceSessionDto);
  }

  @Get()
  findAll(): Promise<PriceSession[]> {
    return this.priceSessionService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<PriceSession | undefined> {
    return this.priceSessionService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.priceSessionService.remove(id);
  }
}
