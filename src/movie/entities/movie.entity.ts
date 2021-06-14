import { BaseEntity } from "src/core/entities/base.entity";
import { Entity, Column } from "typeorm";
import { AgeRating, Category } from "../enum/movie.enum";

@Entity()
export class Movie extends BaseEntity {
  @Column("text")
  title: string;
  @Column("text")
  director: string;
  @Column("text")
  actor: string;
  @Column("text")
  principal: string;
  @Column("int")
  duration: number;
  @Column("varchar")
  ageRating: AgeRating;
  @Column("varchar")
  category: Category;
}
