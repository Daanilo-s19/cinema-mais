import { IsPositive, IsString } from "class-validator";

export class CinemaDto {
  @IsString()
  name: string;
  @IsString()
  city: string;
}
