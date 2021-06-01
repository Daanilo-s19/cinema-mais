import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("date")
  date: Date;
}
