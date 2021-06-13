import { BaseEntity } from "src/core/entities/base.entity";
import { Column, Entity, Index } from "typeorm";

@Entity("session_price")
export class SessionPrice extends BaseEntity {
  @Column({ type: "double precision" })
  amount: number;

  @Index("IX_session_price_isWeekend")
  @Column({ type: "bool", default: false })
  isWeekend: boolean;
}
