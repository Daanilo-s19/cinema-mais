import { CinemaController } from "./controller/cinema.controller";
import { CinemaService } from "./services/cinema.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
