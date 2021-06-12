import { Cinema } from "src/cinema/entities/cinema.entity";
import { BaseEntity } from "src/core/entities/base.entity";
import { Entity, Column, ManyToOne, TableInheritance } from "typeorm";
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

  getAdditionalPercentage(): number {
    return 0;
  }
}
