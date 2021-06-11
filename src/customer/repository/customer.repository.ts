import { BaseRepository } from "typeorm-transactional-cls-hooked/dist/BaseRepository";
import { EntityRepository } from "typeorm";
import { Customer } from "../entities/customer.entity";

@EntityRepository(Customer)
export abstract class CustomerRepository extends BaseRepository<Customer> {}
