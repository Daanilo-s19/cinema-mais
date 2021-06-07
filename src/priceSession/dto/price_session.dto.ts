import { IsBoolean, IsDate, IsPositive } from "class-validator";

export class PriceSessionDto {
  @IsPositive()
  id: number;
  @IsDate()
  createAt: Date;
  @IsPositive()
  total: Number;
  @IsBoolean()
  isWeekend: boolean;
}
