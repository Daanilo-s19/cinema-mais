import { 
  BaseEntity, 
  Entity, 
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
 } from "typeorm";

@Entity({ name: "customer" })
@TableInheritance({ column: { type: "varchar", name: "organization" } })
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  cpf: string;

  @Column("varchar")
  name: string;
}
