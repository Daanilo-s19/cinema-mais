import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PriceSession {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("date")
  createAt: Date;
  @Column("int")
  total: number;
  @Column("boolean")
  isWeekend: boolean;
}
