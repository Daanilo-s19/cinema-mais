import { IsPositive, Min } from "class-validator";

export class MovieRoomDto {
  @IsPositive()
  id: number;
  @IsPositive()
  @Min(1)
  capacity: number;
  @IsPositive()
  cinemaId: number;
}
