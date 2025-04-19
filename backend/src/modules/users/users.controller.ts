import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    try{
      return await this.usersService.findAll();
    } catch (error) {
      throw new BadRequestException('error al obtener los usuarios '+ error);
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    try{
      return await this.usersService.findOne(id);

    } catch (error) {
      throw new BadRequestException('error al obtener el usuario '+ error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try{
      return await this.usersService.update(id, updateUserDto);

    } catch(error) {
      throw new BadRequestException('error al actualizar el usuario '+ error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.usersService.remove(id);

    } catch(error){
      throw new BadRequestException('error al eliminar el usuario '+ error);
    }
  }
}
