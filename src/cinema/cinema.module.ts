import { CinemaController } from "./controller/cinema.controller";
import { CinemaService } from "./services/cinema.service";
import { Module } from "@nestjs/common";
import { CinemaRepository } from "./repositories/cinema.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([CinemaRepository])],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
