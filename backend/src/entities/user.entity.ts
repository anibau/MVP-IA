import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Content } from './content.entity';
import { Category } from './category.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @OneToMany(() => Content, content => content.user)
  contents: Content[];
  
  @OneToMany(()=> Category, category => category.user)
  categories: Category[]

} 