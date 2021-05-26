import { User as UserDto } from "./user.dto";

export interface StudentDto extends UserDto {
  institution: string;
}
