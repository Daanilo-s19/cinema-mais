import { Expose } from "class-transformer";
import { BaseEntity } from "src/core/entities/base.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Session } from "src/session/entities/session.entity";
import { Entity, Column, ManyToOne } from "typeorm";

@Entity("ticket")
export class Ticket extends BaseEntity {
  @Column("int")
  sessionId: number;

  @Column("int")
  customerId: number;

  @Column({ type: "double precision", default: 100 })
  price: number;

  @ManyToOne(() => Customer)
  customer: Customer;

  @ManyToOne(() => Session)
  session: Session;
}
