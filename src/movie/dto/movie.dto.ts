import { IsEnum, IsPositive, IsString, Min } from "class-validator";
import { Agerating, Category } from "../enum/movie.enum";

export class MovieDto {
  @IsPositive()
  id: number;
  @IsString()
  title: string;
  @IsString()
  director: string;
  @IsString()
  actor: string;
  @IsPositive()
  @Min(15)
  duration: number;
  @IsEnum(Agerating)
  ageRating: Agerating;
  @IsEnum(Category)
  category: Category;
}
