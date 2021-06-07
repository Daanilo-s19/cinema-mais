import { IsEnum, IsPositive, IsString, Min } from "class-validator";

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
  duration: Number;
  ageRating: Agerating;
  category: Category;
}
