import { SessionMovieDto } from "../../cinema/dto/session.dto";

export interface User {
  name: string;
  document: string;
  ticket: SessionMovieDto;
  price: Number; // TODO: mas o preço nao vai ser exibido pelo ticket?
}
