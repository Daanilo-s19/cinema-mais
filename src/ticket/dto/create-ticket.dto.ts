import { isPositive, IsPositive, Min } from "class-validator";

export class CreateTicketDto {
  @IsPositive()
  sessionId: number;

  @IsPositive()
  customerId: number;
}
