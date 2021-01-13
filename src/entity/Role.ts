import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @ManyToMany((type) => User, (user) => user.roles)
  @JoinColumn()
  users: User[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
