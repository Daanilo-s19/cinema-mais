import { CustomerController } from "./controller/customer.controller";
import { Module } from "@nestjs/common";
import { CustomerService } from "./services/customer.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerRepository } from "./repository/customer.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CustomerRepository])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
