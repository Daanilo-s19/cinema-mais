import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MovieRoomDto } from "src/movieRoom/dto/movieRoom.dto";
import { SessionDto } from "../dto/session.dto";
import { Session } from "../entities/session.entity";
import { SessionRepository } from "../repository/session.repository";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: SessionRepository
  ) {}
  async createSession(sessionDto: SessionDto): Promise<SessionDto> {
    const session = this.sessionRepository.create();
    return this.sessionRepository.save(session);
  }
  async updateSession(id: number, sessionDto: SessionDto): Promise<Session> {
    const session = this.sessionRepository.create();
    session.date = sessionDto.date;
    session.id = sessionDto.id;
    session.idMovie = sessionDto.idMovie;
    this.sessionRepository.update(id, session);
    return session;
  }
  async findAll(): Promise<Session[]> {
    return this.sessionRepository.find();
  }
  async findMoviesDay(MovieRoom: MovieRoomDto, date: Date): Promise<Session[]> {
    return this.sessionRepository.find();
  }
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
