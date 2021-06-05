import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { MovieRoom } from "../../movieRoom/entities/movieRoom.entity";

@Entity()
export class Cinema {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("text")
  name: string;

  @Column("text")
  city: string;
  @OneToMany(() => MovieRoom, (movieRoom) => movieRoom.cinema)
  movieRooms: MovieRoom[];
}
