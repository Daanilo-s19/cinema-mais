import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configs, databaseConfigKey } from "./config";
import { LoggerModule } from "./logger/logger.module";
import { CoreModule } from "./core/core.module";
import { InfraModule } from "./infra/infra.module";
import { AppController } from "./controllers/app.controller";

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
    InfraModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
