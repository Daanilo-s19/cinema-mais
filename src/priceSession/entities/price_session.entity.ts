import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PriceSession {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("date")
  createAt: Date;
  @Column("number")
  total: Number;
  @Column("boolean")
  isWeekend: boolean;
}
