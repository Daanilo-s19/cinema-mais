import { BaseEntity } from "src/core/entities/base.entity";
import { MovieRoom } from "src/movie-room/entities/movie-room.entity";
import { Movie } from "src/movie/entities/movie.entity";
import { PriceSession } from "src/priceSession/entities/price_session.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Session extends BaseEntity {
  @Column("date")
  date: Date;

  @Column("number")
  roomId: number;

  @Column("number")
  movieId: number;

  @Column("number")
  priceSessionId: number;

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => MovieRoom)
  room: MovieRoom;

  @ManyToOne(() => PriceSession)
  priceSession: PriceSession;

}
