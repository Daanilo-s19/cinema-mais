import { ChildEntity, Column } from "typeorm";
import { Customer } from "./customer.entity";

@ChildEntity()
export class Student extends Customer {
  @Column({ type: "text", nullable: true })
  organization?: string;

  getDiscountPercentage(): number {
    return 0.5;
  }
}
