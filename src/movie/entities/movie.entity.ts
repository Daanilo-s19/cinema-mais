import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Agerating, Category } from "../enum/movie.enum";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("text")
  title: string;
  @Column("text")
  director: string;
  @Column("text")
  actor: string;
  @Column("int")
  duration: number;
  @Column()
  ageRating: Agerating;
  @Column()
  category: Category;
}
