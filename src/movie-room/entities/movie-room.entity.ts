import { Cinema } from "src/cinema/entities/cinema.entity";
import { BaseEntity } from "src/core/entities/base.entity";
import { Session } from "src/session/entities/session.entity";
import { Entity, Column, ManyToOne, TableInheritance, OneToMany } from "typeorm";
import { MovieRoomType } from "../enums/movie-room-type.enum";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class MovieRoom extends BaseEntity {
  @Column({ type: "text" })
  name: string;

  @Column("int")
  capacity: number;

  @Column("int")
  cinemaId: number;

  @Column("varchar")
  type: MovieRoomType;

  @ManyToOne(() => Cinema)
  cinema: Cinema;

  @OneToMany(() => Session, (session) => session.room)
  sessions: Session[]

  getAdditionalPercentage(): number {
    return 0;
  }
}
