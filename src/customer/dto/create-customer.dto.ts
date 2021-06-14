import { IsOptional, IsString, Length } from "class-validator";

export class CreateCustomerDto {
  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  organization: string;
}
