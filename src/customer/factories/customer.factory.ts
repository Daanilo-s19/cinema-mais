import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerFactoryDto } from "../dto/customer-factory.dto";
import { Customer } from "../entities/customer.entity";
import { CustomerType } from "../enums/customer-type.enum";
import { CustomerRepository } from "../repository/customer.repository";
import { StudentRepository } from "../repository/student.repository";

@Injectable()
export class CustomerFactory {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
    @InjectRepository(StudentRepository)
    private readonly studentRepository: StudentRepository
  ) {}

  async getCustomer(
    factoryDto: CustomerFactoryDto
  ): Promise<Customer | undefined> {
    switch (factoryDto.type) {
      case CustomerType.Student:
        return this.studentRepository.findOne(factoryDto.id);
      default:
        return this.customerRepository.findOne(factoryDto.id);
    }
  }
}
