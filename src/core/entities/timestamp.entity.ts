import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  Index,
  UpdateDateColumn,
} from "typeorm";

export class TimestampEntity extends BaseEntity {
  @CreateDateColumn()
  @Index()
  createdAt: Date;

  @UpdateDateColumn()
  @Index()
  updatedAt: Date;

  @DeleteDateColumn()
  @Index()
  deletedAt: Date;
}
