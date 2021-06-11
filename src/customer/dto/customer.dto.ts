import { IsPositive, IsString } from "class-validator";

export class CustomerDto {
  @IsPositive()
  id: number;
  @IsString()
  cpf: string;
  @IsString()
  name: string;
  @IsString()
  organization: string;
}
