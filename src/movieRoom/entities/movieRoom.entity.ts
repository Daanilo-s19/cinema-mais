import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MovieRoom {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("number")
  capacity: number;
}
