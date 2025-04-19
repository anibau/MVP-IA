import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async getAllUsers() {
        const users= await this.userRepository.find();
        if(users.length === 0){
            throw new BadRequestException('No se encontraron usuarios');
        }
        return users;
    }
    async getUserById(id: string) {
        const user = await this.userRepository.findOne({where:{id:id}});
        if(!user){
            throw new BadRequestException('No se encontro el usuario');
        }
        return user;
    }
   
    async updateUser(id: string, userData: User) {
        const userFound = await this.userRepository.findOne({where:{id:id}});
        if(!userFound){
            throw new BadRequestException('No se encontro el usuario');
        }
        const updatedUser = await this.userRepository.update(userFound.id, userData);

        return updatedUser;
    }
    async deleteUser(id: string) {
        const userFound = await this.userRepository.findOne({where:{id:id}});
        if(!userFound){
            throw new BadRequestException('No se encontro el usuario');
        }
        await this.userRepository.remove(userFound);
        return 'User deleted';
    }
}