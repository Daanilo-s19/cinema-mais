import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MovieRoomDto } from "src/movieRoom/dto/movieRoom.dto";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { SessionDto } from "../dto/session.dto";
import { Session } from "../entities/session.entity";
import { SessionRepository } from "../repository/session.repository";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: SessionRepository
  ) {}
  async createSession(sessionDto: SessionDto): Promise<Session> {
    const session = this.sessionRepository.create(sessionDto);
    return this.sessionRepository.save(session);
  }
  @Transactional()
  async updateSession(id: number, sessionDto: SessionDto): Promise<Session> {
    const session = this.sessionRepository.create(sessionDto);
    await this.sessionRepository.update(id, session);
    return session;
  }
  async findAll(): Promise<Session[]> {
    return this.sessionRepository.find();
  }
  async findMoviesDay(MovieRoom: MovieRoomDto, date: Date): Promise<Session[]> {
    return this.sessionRepository.find();
  }
  @Transactional()
  async remove(id: number): Promise<void> {
    await this.sessionRepository.delete(id);
  }
  async findRemainingAmount(sessionDto: SessionDto): Promise<Session[]> {
    return this.sessionRepository.find();
  }
  async isFullSession(sessionDto: SessionDto): Promise<boolean> {
    const result = await this.sessionRepository.find();
    return false;
  }
}
