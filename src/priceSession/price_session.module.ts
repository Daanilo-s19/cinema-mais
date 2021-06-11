import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PriceSessionController } from "./controller/price_session.controller";
import { PriceSessionRepository } from "./repository/price_session.repository";
import { PriceSessionService } from "./services/price_session.service";

@Module({
  imports: [TypeOrmModule.forFeature([PriceSessionRepository])],
  controllers: [PriceSessionController],
  providers: [PriceSessionService],
})
export class PriceSessionModule {}
