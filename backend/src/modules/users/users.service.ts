import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository){}

  findAll() {
    return this.userRepository.getAllUsers();
  }

  findOne(id: string) {
    return this.userRepository.getUserById(id);
  }

  update(id: string, updateUserDto) {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }
}
