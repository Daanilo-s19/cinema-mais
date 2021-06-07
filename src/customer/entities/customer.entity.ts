import { PrimaryGeneratedColumn } from "typeorm";

export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  cpf: string;
  name: string;
  organization: string;
}
