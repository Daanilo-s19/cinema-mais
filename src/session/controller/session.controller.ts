import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { CreateSessionDto } from "../dto/create-session.dto";
import { SearchSessionDto } from "../dto/search-session.dto";
import { Session } from "../entities/session.entity";
import { SessionService } from "../services/session.service";

@Controller("session")
@UseInterceptors(ClassSerializerInterceptor)
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async create(@Body() createSessionDto: CreateSessionDto): Promise<Session> {
    return await this.sessionService.createSession(createSessionDto);
  }

  @Get()
  async findAll(@Query() sessionDto: SearchSessionDto): Promise<Session[]> {
    return await this.sessionService.findAll(sessionDto);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return await this.sessionService.remove(id);
  }
}
