import dateUtil = require("date-fns");
import { Expose } from "class-transformer";
import { Entity, Column, ManyToOne, Index, OneToMany } from "typeorm";

import { BaseEntity } from "src/core/entities/base.entity";
import { MovieRoom } from "src/movie-room/entities/movie-room.entity";
import { Movie } from "src/movie/entities/movie.entity";
import { SessionPrice } from "src/session-price/entities/session-price.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { CLEANING_OFFSET } from "../session.constants";

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
    return this.room.capacity - (this.tickets?.length ?? 0);
  }

  @Expose()
  get hasRemainingSeats(): boolean {
    return this.remainingSeats > 0;
  }

  @Expose()
  get alreadyStarted(): boolean {
    return new Date() > this.date;
  }

  @Expose()
  get endAt(): Date {
    return dateUtil.addMinutes(
      this.date,
      this.movie.duration + CLEANING_OFFSET
    );
  }

  @Expose()
  get time(): string {
    return dateUtil.format(this.date, "HH:mm");
  }

  priceWithRoomPercentage(): number {
    return this.price.amount * (1 + this.room.getAdditionalPercentage());
  }
}
