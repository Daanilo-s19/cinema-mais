import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CustomerDto } from "../dto/customer.dto";
import { Customer } from "../entities/customer.entity";
import { CustomerRepository } from "../repository/customer.repository";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: CustomerRepository
  ) {}

  async create(customerDto: CustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(customerDto);
    return this.customerRepository.save(customer);
  }
  @Transactional()
  async update(id: number, customerDto: CustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(customerDto);
    await this.customerRepository.update(id, customer);
    return customer;
  }
  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }
  async findOne(id: number): Promise<Customer | undefined> {
    return this.customerRepository.findOne(id);
  }
  @Transactional()
  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
