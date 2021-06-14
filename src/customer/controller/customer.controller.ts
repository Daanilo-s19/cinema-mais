import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from "@nestjs/common";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { Customer } from "../entities/customer.entity";
import { CustomerService } from "../services/customer.service";
@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post()
  create(@Body() customerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.createCustomer(customerDto);
  }

  @Put(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() customerDto: UpdateCustomerDto
  ): Promise<Customer> {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.customerService.remove(id);
  }
}
