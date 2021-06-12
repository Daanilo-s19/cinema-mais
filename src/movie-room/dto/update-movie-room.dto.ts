import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from "class-validator";

export class UpdateMovieRoomDto  {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsPositive()
  @Min(1)
  capacity?: number;

  @IsOptional()
  @IsPositive()
  cinemaId?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tools?: string[];
}
