import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CharacterRace } from '../enum/character-race';

@Entity('Character')
export class Character {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ default: 0 })
  power: number;
  @Column({ type: 'enum', enum: CharacterRace, default: CharacterRace.Human })
  race: CharacterRace;
  @Column({ nullable: true })
  imageUrl: string;
  @Column()
  createdBy: string;
  @CreateDateColumn()
  createdOn: Date;
  @UpdateDateColumn()
  updatedOn: Date;
}
