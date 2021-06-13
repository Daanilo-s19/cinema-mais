import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SessionPriceService } from "./session-price.service";
import { SessionPriceController } from "./controllers/session-price.controller";
import { SessionPriceRepository } from "./repositories/session-price.repository";

@Module({
  imports: [TypeOrmModule.forFeature([SessionPriceRepository])],
  controllers: [SessionPriceController],
  providers: [SessionPriceService],
  exports: [SessionPriceService],
})
export class SessionPriceModule {}
