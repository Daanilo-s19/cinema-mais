import { IsPositive, Min } from "class-validator";

export class CreateSessionPriceDto {
  @IsPositive()
  @Min(1)
  amount: number;

  @IsPositive()
  @Min(1)
  weekendAmount: number;
}
