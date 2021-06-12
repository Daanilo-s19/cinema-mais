import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from "class-validator";

export class CreateMovieRoomDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsPositive()
  @Min(1)
  capacity: number;

  @IsPositive()
  cinemaId: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tools?: string[];
}
