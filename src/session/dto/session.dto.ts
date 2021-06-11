import { IsDate, IsPositive } from "class-validator";

export class SessionDto {
  @IsPositive()
  id: number;
  @IsPositive()
  idMovie: number;
  @IsDate()
  date: Date;
}
