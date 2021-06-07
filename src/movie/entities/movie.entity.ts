import { Session } from "node:inspector";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("string")
  title: string;
  @Column("string")
  director: string;
  @Column("string")
  actor: string;
  @Column("number")
  duration: Number;
  @Column()
  ageRating: Agerating;
  @Column()
  category: Category;
}
