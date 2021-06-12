import { CustomerModule } from "./customer/customer.module";
import { TicketModule } from "./ticket/ticket.module";
import { PriceSessionController } from "./priceSession/controller/price_session.controller";
import { PriceSessionModule } from "./priceSession/price_session.module";
import { SessionModule } from "./session/session.module";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configs, databaseConfigKey } from "./config";
import { LoggerModule } from "./logger/logger.module";
import { CoreModule } from "./core/core.module";
import { AppController } from "./controllers/app.controller";
import { CinemaModule } from "./cinema/cinema.module";
import { MovieModule } from "./movie/movie.module";
import { MovieRoomModule } from "./movie-room/movie-room.module";

@Module({
  imports: [
    ConfigModule.forRoot({ load: configs }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get(databaseConfigKey)!,
      inject: [ConfigService],
    }),

    CoreModule,
    LoggerModule,
    CinemaModule,
    MovieRoomModule,
    PriceSessionModule,
    SessionModule,
    MovieModule,
    CustomerModule,
    TicketModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
