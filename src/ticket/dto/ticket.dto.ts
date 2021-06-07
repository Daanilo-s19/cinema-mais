import { isPositive, IsPositive, Min } from "class-validator";

export class TicketDto {
  @IsPositive()
  id: number;
  @IsPositive()
  @Min(1)
  price: number;
  @IsPositive()
  sessionId: number;
  @IsPositive()
  customerId: number;
}
