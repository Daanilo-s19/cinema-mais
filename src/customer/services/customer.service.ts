import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { Customer } from "../entities/customer.entity";
import { Student } from "../entities/student.entity";
import { CustomerType } from "../enums/customer-type.enum";
import { CustomerRepository } from "../repository/customer.repository";
import { StudentRepository } from "../repository/student.repository";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
    @InjectRepository(StudentRepository)
    private readonly studentRepository: StudentRepository
  ) {}
  async create(customerDto: CreateCustomerDto): Promise<Customer> {
    return customerDto.organization
      ? await this.studentRepository.save(customerDto)
      : await this.customerRepository.save(customerDto);
  }

  @Transactional()
  async update(id: number, customerDto: UpdateCustomerDto): Promise<Customer> {
    let customer = await this.findOne(id);
    if (customer instanceof Student) {
      customer = this.studentRepository.merge(customer, customerDto);
      return this.studentRepository.save(customer);
    } else {
      customer = this.customerRepository.merge(customer, customerDto);
      return this.customerRepository.save(customer);
    }
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  @Transactional()
  async findOne(id: number): Promise<Customer> {
    const result = await this.customerRepository.findOne({
      select: ["type"],
      where: { id },
    });

    if (!result) throw new NotFoundException();

    const customer = (result.type === CustomerType.Customer
      ? await this.customerRepository.findOne(id)
      : await this.studentRepository.findOne(id))!;

    return customer;
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.customerRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }
}
