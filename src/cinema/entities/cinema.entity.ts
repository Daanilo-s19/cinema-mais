import { BaseEntity } from "src/core/entities/base.entity";
import { Entity, Column, OneToMany } from "typeorm";
import { MovieRoom } from "../../movieRoom/entities/movieRoom.entity";

@Entity()
export class Cinema extends BaseEntity {
  @Column("text")
  name: string;

  @Column("text")
  city: string;
  @OneToMany(() => MovieRoom, (movieRoom) => movieRoom.cinema)
  movieRooms: MovieRoom[];
}
