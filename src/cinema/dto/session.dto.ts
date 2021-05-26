import { Movie } from "./movie.dto";
import { MovieRoom } from "./movieRoom.dto";
import { PriceSession } from "./price_session.dto";

export class SessionMovie {
  movie: Movie;
  movieRoom: MovieRoom;
  date: Date;
  price: PriceSession;
}
