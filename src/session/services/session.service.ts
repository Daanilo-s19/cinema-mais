import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SessionDto } from "../dto/session.dto";
import { Session } from "../entities/session.entity";
import { SessionRepository } from "../repository/session.repository";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: SessionRepository
  ) {}
  async findRemainingAmount(sessionDto: SessionDto): Promise<Session[]> {
    return this.sessionRepository.find();
  }
  async isFullSession(sessionDto: SessionDto): Promise<boolean> {
    const result = await this.sessionRepository.find();
    return false;
  }
}
