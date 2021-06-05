import { MovieRoomDto } from "src/movieRoom/dto/movieRoom.dto";
import { MovieDto } from "../../cinema/dto/movie.dto";
import { PriceSessionDto } from "../../priceSession/dto/price_session.dto";

export class SessionDto {
  id: number;
  idMovie: number;
  date: Date;
}
