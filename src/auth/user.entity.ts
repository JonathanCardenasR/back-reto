import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
