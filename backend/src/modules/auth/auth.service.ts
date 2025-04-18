import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}


  async login(user: Partial<User>) {
    const userFound = await this.userRepository.findOne({where:{email:user.email}});
    if(!userFound){
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const validatePassword = await bcrypt.compare(user.password, userFound.password);
    if(!validatePassword){
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const payload = { sub: user.id, id: user.id, email: user.email, roles:["user", "admin"]  };
    const token = this.jwtService.sign(payload);
    return { message: 'Login successful', token: token, user: user
    };
  }

  async register(userData: Partial<User>) {
    const userFound = await this.userRepository.findOne({where:{email:userData.email}});
    if(userFound){
      throw new BadRequestException('El usuario ya existe');
    }else if(!userData.password){
      throw new BadRequestException('La contraseña es requerida');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    if(!hashedPassword){
      throw new BadRequestException('No se pudo hashear la contraseña');
    }
    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    await this.userRepository.save(user);
    const { password, ...result } = user;
    return result;
  }
} 