import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { Customer } from "../entities/customer.entity";
import { Student } from "../entities/student.entity";
import { CustomerFactory } from "../factories/customer.factory";
import { CustomerRepository } from "../repository/customer.repository";
import { StudentRepository } from "../repository/student.repository";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
    @InjectRepository(StudentRepository)
    private readonly studentRepository: StudentRepository,
    private readonly customerFactory: CustomerFactory
  ) {}
  async create(customerDto: CreateCustomerDto): Promise<Customer> {
    const { cpf } = customerDto;
    const cpfExists = new Boolean(await this.customerRepository.count({ cpf }));
    if (cpfExists) {
      throw new UnprocessableEntityException(
        "a customer already exists with given cpf"
      );
    }

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
      select: ["type", "id"],
      where: { id },
    });

    if (!result) throw new NotFoundException();

    const customer = await this.customerFactory.getCustomer(result);

    return customer!;
  }

  @Transactional()
  async remove(id: number): Promise<void> {
    const result = await this.customerRepository.softDelete(id);
    if (!result.affected) throw new NotFoundException();
  }
}
