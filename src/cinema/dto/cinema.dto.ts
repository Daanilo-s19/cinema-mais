import { MovieRoomDto } from "./movieRoom.dto";

export interface CinemaDto {
  id: number;
  name: string;
  movieRoom: MovieRoomDto;
  city: string;
}
