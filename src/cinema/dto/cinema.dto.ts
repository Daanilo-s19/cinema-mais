import { IsPositive, IsString } from "class-validator";
import { MovieRoomDto } from "src/movieRoom/dto/movieRoom.dto";

export class CinemaDto {
  @IsPositive()
  id: number;
  @IsString()
  name: string;
  movieRoom: MovieRoomDto;
  @IsString()
  city: string;
}
