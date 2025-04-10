import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async getAllUsers() {
        const users= this.userRepository.find();
        return users;
    }
    async getUserById(id: string) {
        const user = await this.userRepository.findOne({where:{id:id}});
        return user;
    }
    async createUser(user: User) {
        const newUser = this.userRepository.create(user);
        await this.userRepository.save(newUser);
        return newUser;
    }
    async updateUser(id: string, user: User) {
        const updatedUser = await this.userRepository.update(id, user);
        return updatedUser;
    }
    async deleteUser(id: string) {
        const deletedUser = await this.userRepository.delete(id);
        return 'User deleted';
    }
}