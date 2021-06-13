import { Type } from "class-transformer";
import { IsDate, IsPositive, Min } from "class-validator";

export class CreateSessionDto {
  @IsPositive()
  @Min(1)
  movieId: number;

  @IsPositive()
  @Min(1)
  roomId: number;

  @IsDate()
  @Type(() => Date)
  date: Date;
}
