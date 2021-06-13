import { BaseEntity } from "src/core/entities/base.entity";
import { Entity, Column, TableInheritance } from "typeorm";
import { CustomerType } from "../enums/customer-type.enum";

@Entity({ name: "customer" })
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Customer extends BaseEntity {
  @Column("varchar")
  cpf: string;

  @Column("varchar")
  name: string;

  @Column({ type: "varchar", default: CustomerType.Customer })
  type: CustomerType;
}
