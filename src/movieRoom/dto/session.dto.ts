import { MovieDto } from "../../cinema/dto/movie.dto";
import { MovieRoomDto } from "./movieRoom.dto";
import { PriceSessionDto } from "../../cinema/dto/price_session.dto";

export class SessionMovieDto {
  movie: MovieDto;
  movieRoom: MovieRoomDto;
  date: Date;
  price: PriceSessionDto;
}
