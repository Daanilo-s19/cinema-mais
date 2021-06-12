import { ChildEntity, Column } from "typeorm";
import { MovieRoom } from "./movie-room.entity";

@ChildEntity()
export class MovieRoom3d extends MovieRoom {
  @Column({ array: true, type: "text", nullable: true })
  tools?: string[];

  getAdditionalPercentage(): number {
    return 0.2;
  }
}
