import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { Customer } from "../entities/customer.entity";
import { Student } from "../entities/student.entity";
import { CustomerRepository } from "../repository/customer.repository";
import { StudentRepository } from "../repository/student.repository";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: CustomerRepository,
    @InjectRepository(Student)
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

  async findOne(id: number): Promise<Customer> {
    const customer = await this.studentRepository.findOne({
      select: ["organization"],
      where: { id },
    });
   
    const result = (customer
    ? await this.studentRepository.findOne(id)
    : await this.customerRepository.findOne(id))!;

    if (!result) throw new NotFoundException();

    return result
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.customerRepository.delete(id);
    if (!result.affected) throw new NotFoundException();
  }
}
