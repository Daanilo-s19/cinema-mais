import { isWeekend } from "date-fns";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Not, LessThanOrEqual } from "typeorm";
import { CreateSessionPriceDto } from "./dtos/create-session-price.dto";
import { SessionPrice } from "./entities/session-price.entity";
import { SessionPriceRepository } from "./repositories/session-price.repository";

@Injectable()
export class SessionPriceService {
  constructor(
    @InjectRepository(SessionPriceRepository)
    private readonly sessionPriceRepository: SessionPriceRepository
  ) {}

  async create(
    createSessionPriceDto: CreateSessionPriceDto
  ): Promise<SessionPrice[]> {
    return await this.sessionPriceRepository.save([
      this.sessionPriceRepository.create({
        amount: createSessionPriceDto.amount,
      }),
      this.sessionPriceRepository.create({
        amount: createSessionPriceDto.weekendAmount,
        isWeekend: true,
      }),
    ]);
  }

  findAll(): Promise<SessionPrice[]> {
    return this.sessionPriceRepository.find();
  }

  async findOne(id: number): Promise<SessionPrice> {
    const price = await this.sessionPriceRepository.findOne(id);

    if (!price) throw new NotFoundException();

    return price;
  }

  async findByDate(date: Date): Promise<SessionPrice> {
    const price = await this.sessionPriceRepository.findOne({
      where: {
        createdAt: LessThanOrEqual(date),
        isWeekend: isWeekend(date),
      },
      order: {
        createdAt: "DESC",
      },
    });

    if (!price) throw new NotFoundException();

    return price;
  }
}
