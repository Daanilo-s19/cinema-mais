import { Type } from "class-transformer";
import { IsDate, IsNumberString, IsOptional } from "class-validator";

export class SearchSessionDto {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: Date;

  @IsOptional()
  @IsNumberString()
  roomId?: number;
}
