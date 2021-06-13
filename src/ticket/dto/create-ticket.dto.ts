import { IsPositive, Min } from "class-validator";

export class CreateTicketDto {
  @IsPositive()
  @Min(1)
  sessionId: number;

  @IsPositive()
  @Min(1)
  customerId: number;
}
