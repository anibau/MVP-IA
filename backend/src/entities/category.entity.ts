import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Content } from "./content.entity";

@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToOne(() => User, user => user.categories, {onDelete: 'CASCADE'})
    user: User

    @ManyToMany(()=>Content)
    @JoinTable()
    contents: Content[]
}