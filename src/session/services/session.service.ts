import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { endOfDay, startOfDay } from "date-fns";
import { MovieRoomService } from "src/movie-room/services/movie-room.service";
import { MovieService } from "src/movie/services/movie.service";
import { SessionPriceService } from "src/session-price/session-price.service";
import { Between } from "typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateSessionDto } from "../dto/create-session.dto";
import { SearchSessionDto } from "../dto/search-session.dto";
import { Session } from "../entities/session.entity";
import { SessionRepository } from "../repository/session.repository";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionRepository)
    private readonly sessionRepository: SessionRepository,
    private readonly sessionPriceService: SessionPriceService,
    private readonly roomService: MovieRoomService,
    private readonly movieService : MovieService,
  ) {}

  private static readonly relations = ["room", "movie", "price", "tickets"];

  @Transactional()
  async createSession(sessionDto: CreateSessionDto): Promise<Session> {
    const price = await this.sessionPriceService.findByDate(sessionDto.date);
    const room = await this.roomService.findOne(sessionDto.roomId);
    const movie  = await this.movieService.findOne(sessionDto.movieId)

    const session = this.sessionRepository.create({ ...sessionDto, price, room, movie });
    return await this.sessionRepository.save(session);
  }

  async findAll(searchDto: SearchSessionDto): Promise<Session[]> {
    const where = searchDto.date
      ? { date: Between(startOfDay(searchDto.date), endOfDay(searchDto.date)) }
      : {};

    return this.sessionRepository.find({
      relations: SessionService.relations,
      where,
    });
  }

  async findOne(id: number): Promise<Session> {
    const session = await this.sessionRepository.findOne({
      relations: SessionService.relations,
      where: { id },
    });
    if (!session) throw new NotFoundException();
    return session;
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.sessionRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }
}
