import { MovieRoomDto } from "src/movieRoom/dto/movieRoom.dto";
import { MovieDto } from "../../cinema/dto/movie.dto";
import { PriceSessionDto } from "./price_session.dto";

export class SessionDto {
  movie: MovieDto;
  movieRoom: MovieRoomDto;
  date: Date;
  price: PriceSessionDto;
}
