import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "student" })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
}
