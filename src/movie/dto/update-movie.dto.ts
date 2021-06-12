import {
  IsEnum,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Min,
} from "class-validator";
import { AgeRating, Category } from "../enum/movie.enum";

export class UpdateMovieDto {
  @IsOptional()
  @Length(3, 255)
  @IsString()
  title?: string;

  @IsOptional()
  @Length(3, 255)
  @IsString()
  director?: string;

  @IsOptional()
  @Length(3, 255)
  @IsString()
  actor?: string;

  @IsOptional()
  @IsPositive()
  @Min(15)
  duration?: number;

  @IsOptional()
  @IsEnum(AgeRating)
  ageRating?: AgeRating;

  @IsOptional()
  @IsEnum(Category)
  category?: Category;
}
