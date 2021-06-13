import { Type } from "class-transformer";
import { IsDate, IsOptional } from "class-validator";

export class SearchSessionDto {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: Date;
}
