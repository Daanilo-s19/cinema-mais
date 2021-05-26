import { MovieDto } from "./movie.dto";
import { MovieRoomDto } from "./movieRoom.dto";
import { PriceSessionDto } from "./price_session.dto";

export class SessionMovieDto {
  movie: MovieDto;
  movieRoom: MovieRoomDto;
  date: Date;
  price: PriceSessionDto;
}
