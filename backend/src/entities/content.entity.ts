import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('contents')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  imageUrl: string;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  views: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, user => user.contents)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 