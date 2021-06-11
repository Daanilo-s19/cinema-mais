import { Controller, Get } from "@nestjs/common";
import { SessionDto } from "../dto/session.dto";
import { Session } from "../entities/session.entity";
import { SessionService } from "../services/session.service";

@Controller("session")
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  findAll(sessionDto: SessionDto): Promise<Session[]> {
    return this.sessionService.findRemainingAmount(sessionDto);
  }
  @Get()
  isFullSession(sessionDto: SessionDto): Promise<boolean> {
    return this.sessionService.isFullSession(sessionDto);
  }
}
