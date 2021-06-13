import { CustomerController } from "./controller/customer.controller";
import { Module } from "@nestjs/common";
import { CustomerService } from "./services/customer.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerRepository } from "./repository/customer.repository";
import { StudentRepository } from "./repository/student.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerRepository]),
    TypeOrmModule.forFeature([StudentRepository]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
