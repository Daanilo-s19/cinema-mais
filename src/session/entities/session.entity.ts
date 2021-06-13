import { Expose } from "class-transformer";
import { BaseEntity } from "src/core/entities/base.entity";
import { MovieRoom } from "src/movie-room/entities/movie-room.entity";
import { Movie } from "src/movie/entities/movie.entity";
import { SessionPrice } from "src/session-price/entities/session-price.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Entity, Column, ManyToOne, Index, OneToMany } from "typeorm";

@Entity("session")
export class Session extends BaseEntity {
  @Index("IX_session_date")
  @Column("timestamp without time zone")
  date: Date;

  @Column("int")
  roomId: number;

  @Column("int")
  movieId: number;

  @Column("int")
  priceId: number;

  @OneToMany(() => Ticket, (ticket) => ticket.session)
  tickets: Ticket[];

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => MovieRoom)
  room: MovieRoom;

  @ManyToOne(() => SessionPrice)
  price: SessionPrice;

  @Expose()
  get remainingSeats(): number {
    return this.room.capacity - this.tickets.length;
  }

  @Expose()
  get hasRemainingSeats(): boolean {
    return this.remainingSeats > 0;
  }
}
