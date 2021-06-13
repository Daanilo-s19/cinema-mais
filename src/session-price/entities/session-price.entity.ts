import { BaseEntity } from "src/core/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity("session_price")
export class SessionPrice extends BaseEntity {
  @Column("int")
  amount: number;

  @Column({ type: "bool", default: false })
  isWeekend: boolean;
}
