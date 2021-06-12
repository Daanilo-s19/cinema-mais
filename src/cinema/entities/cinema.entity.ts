import { BaseEntity } from "src/core/entities/base.entity";
import { MovieRoom } from "src/movie-room/entities/movie-room.entity";
import { Entity, Column, OneToMany } from "typeorm";

@Entity()
export class Cinema extends BaseEntity {
  @Column("text")
  name: string;

  @Column("text")
  city: string;

  @OneToMany(() => MovieRoom, (movieRoom) => movieRoom.cinema)
  rooms: MovieRoom[];
}
