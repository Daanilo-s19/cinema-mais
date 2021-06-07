import { Movie } from "src/movie/entities/movie.entity";
import { MovieRoom } from "src/movieRoom/entities/movieRoom.entity";
import { PriceSession } from "src/priceSession/entities/price_session.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: Date;

  @Column("number")
  movieRoomId: number;
  @OneToOne(() => MovieRoom)
  @JoinColumn()
  movieRoom: MovieRoom;

  @Column("number")
  movieId: number;
  @OneToOne(() => Movie)
  @JoinColumn()
  movie: Movie;

  @Column("number")
  priceSessionId: number;
  @OneToOne(() => PriceSession)
  @JoinColumn()
  priceSession: PriceSession;
}
