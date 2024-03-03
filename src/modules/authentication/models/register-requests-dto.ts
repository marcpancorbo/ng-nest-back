import { UserRole } from '../enum/user-role';

export interface RegisterRequestDto {
  username: string;
  password: string;
  email: string;
  role: UserRole;
}
