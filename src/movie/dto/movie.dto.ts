import { IsEnum } from "class-validator";

export interface MovieDto {
  id: number;
  title: string;
  director: string;
  actor: string;
  duration: Number;
  ageRating: Agerating;
  category: Category;
}
