import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { PriceSessionDto } from "../dto/price_session.dto";
import { PriceSession } from "../entities/price_session.entity";
import { PriceSessionRepository } from "../repository/price_session.repository";

@Injectable()
export class PriceSessionService {
  constructor(
    @InjectRepository(PriceSession)
    private readonly priceSessionRepository: PriceSessionRepository
  ) {}
  async create(priceSessionDto: PriceSessionDto): Promise<PriceSession> {
    const priceSession = this.priceSessionRepository.create(priceSessionDto);
    return this.priceSessionRepository.save(priceSession);
  }
  @Transactional()
  async update(
    id: number,
    priceSessionDto: PriceSessionDto
  ): Promise<PriceSession> {
    const priceSession = this.priceSessionRepository.create(priceSessionDto);
    await this.priceSessionRepository.update(id, priceSession);
    return priceSession;
  }
  async findAll(): Promise<PriceSession[]> {
    return this.priceSessionRepository.find();
  }
  async findOne(id: number): Promise<PriceSession | undefined> {
    return this.priceSessionRepository.findOne(id);
  }
  @Transactional()
  async remove(id: number): Promise<void> {
    await this.priceSessionRepository.delete(id);
  }
}
