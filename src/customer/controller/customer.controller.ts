import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CustomerDto } from "../dto/customer.dto";
import { Customer } from "../entities/customer.entity";
import { CustomerService } from "../services/customer.service";
@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post()
  create(@Body() customerDto: CustomerDto): Promise<Customer> {
    return this.customerService.create(customerDto);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() customerDto: CustomerDto
  ): Promise<Customer> {
    return this.customerService.update(id, customerDto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Customer | undefined> {
    return this.customerService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.customerService.remove(id);
  }
}
