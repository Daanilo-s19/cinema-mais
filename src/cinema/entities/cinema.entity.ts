import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
