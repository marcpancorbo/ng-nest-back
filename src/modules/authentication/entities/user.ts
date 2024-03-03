import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enum/user-role';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  role: UserRole;
}
