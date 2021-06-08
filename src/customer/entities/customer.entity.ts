import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "customer" })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  cpf: string;
  name: string;
  organization: string;
}
