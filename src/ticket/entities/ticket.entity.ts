import { Customer } from "src/customer/entities/customer.entity";
import { Session } from "src/session/entities/session.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("number")
  price: number;

  @Column("number")
  customerId: number;
  @OneToOne(() => Customer)
  @JoinColumn()
  customer: Customer;

  @Column("number")
  sessionId: number;
  @OneToOne(() => Session)
  @JoinColumn()
  session: Session;
}
