import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
