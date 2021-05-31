import { MovieRoomDto } from "src/movieRoom/dto/movieRoom.dto";

export interface CinemaDto {
  id: number;
  name: string;
  movieRoom: MovieRoomDto;
  city: string;
}
