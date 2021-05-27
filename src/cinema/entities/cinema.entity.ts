import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { MovieRoom } from "./movieRoom.entity";

@Entity()
export class Cinema {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("text")
  name: string;

  @Column()
  movieRoom: MovieRoom;
  @Column("text")
  city: string;
}
