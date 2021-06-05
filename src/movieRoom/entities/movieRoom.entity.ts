import { Cinema } from "src/cinema/entities/cinema.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class MovieRoom {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("number")
  capacity: number;
  @Column("int")
  cinemaId: number;
  @ManyToOne(() => Cinema)
  cinema: Cinema;
}
