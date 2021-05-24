import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const databaseConfigKey = "database";

export const databaseConfig = registerAs(
  databaseConfigKey,
  (): TypeOrmModuleOptions => ({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT!),
    maxQueryExecutionTime: parseInt(process.env.DB_QUERY_TIMEOUT ?? "5000"),
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    subscribers: [__dirname + "/../**/*.subscriber.{js,ts}"],
    synchronize: true,
    logging:
      process.env.DB_LOGGING === "true" ||
      process.env.NODE_ENV === "development",
    namingStrategy: new SnakeNamingStrategy(),
  })
);
