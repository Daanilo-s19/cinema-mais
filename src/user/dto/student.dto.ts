import { User } from "./user.dto";

export interface Student extends User {
  institution: string;
}
