import { registerAs } from "@nestjs/config";
import { SwaggerOptions } from "./interfaces/swagger.interface";

export const swaggerConfigKey = "swagger";

export const swaggerConfig = registerAs(
  swaggerConfigKey,
  (): SwaggerOptions => ({
    title: "CineMais",
    description: "CineMais API",
    version: "v0.0.1",
    users: { cine: "cine" },
  })
);
