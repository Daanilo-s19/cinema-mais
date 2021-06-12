import { IsEnum, IsPositive, IsString, Length, Min } from "class-validator";
import { AgeRating, Category } from "../enum/movie.enum";

export class CreateMovieDto {
  @Length(3, 255)
  @IsString()
  title: string;

  @Length(3, 255)
  @IsString()
  director: string;

  @Length(3, 255)
  @IsString()
  actor: string;

  @IsPositive()
  @Min(15)
  duration: number;

  @IsEnum(AgeRating)
  ageRating: AgeRating;

  @IsEnum(Category)
  category: Category;
}
