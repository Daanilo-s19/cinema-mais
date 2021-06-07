import { Session } from "node:inspector";
import { Customer } from "src/customer/entities/customer.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("number")
  price: number;
  @Column("number")
  sessionId: number;
  @ManyToOne(() => Session)
  session: Session;
  @Column("number")
  customerId: number;
  @ManyToOne(() => Customer)
  customer: Customer;
}
