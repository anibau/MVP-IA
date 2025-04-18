import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try{
      if (!loginDto) {
        throw new BadRequestException('Credenciales inválidas');
      }
      return await this.authService.login(loginDto);
    } catch (error) {
      throw new BadRequestException('error al iniciar sesion '+error);
    }
  }

  @Post('signup')
  async register(@Body() registerDto: Partial<User>) {
    try{
      return this.authService.register(registerDto);

    } catch (error) {
      throw new BadRequestException('error al registrar '+error);
    }
  }
} 