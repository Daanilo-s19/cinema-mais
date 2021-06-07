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

enum Category {
  ACTION,
  COMEDY,
  SUSPENSE,
  TERROR,
}
enum Agerating {
  FREE,
  TWELVE,
  FOURTEEN,
  SIXTEEN,
  EIGHTEEN,
  TWENTY,
}
