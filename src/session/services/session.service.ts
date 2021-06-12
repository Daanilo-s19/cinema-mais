import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateSessionDto } from "../dto/session.dto";
import { Session } from "../entities/session.entity";
import { SessionRepository } from "../repository/session.repository";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionRepository)
    private readonly sessionRepository: SessionRepository
  ) {}

  private static readonly relations = ["room", "movie", "priceSession"];

  @Transactional()
  async createSession(sessionDto: CreateSessionDto): Promise<Session> {
    const session = this.sessionRepository.create(sessionDto);
    return this.sessionRepository.save(session);
  }
  async findAll(): Promise<Session[]> {
    return this.sessionRepository.find({ relations: SessionService.relations });
  }

  async findOne(id: number): Promise<Session> {
    const session = await this.sessionRepository.findOne({
      relations: SessionService.relations,
      where: { id },
    });
    if (!session) throw new NotFoundException();
    return session;
  }
  // async findMoviesDay(MovieRoom: MovieRoomDto, date: Date): Promise<Session[]> {
  //   return this.sessionRepository.find();
  // }
  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.sessionRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }

  async findRemainingAmount(sessionDto: CreateSessionDto): Promise<Session[]> {
    return this.sessionRepository.find();
  }

  async isFullSession(sessionDto: CreateSessionDto): Promise<boolean> {
    const result = await this.sessionRepository.find();
    return false;
  }
}
