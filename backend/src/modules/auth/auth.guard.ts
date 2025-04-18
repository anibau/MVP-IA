import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if(!authHeader){
            throw new UnauthorizedException('header no proporcionado');
        }
        const token= authHeader.split(' ')[1];
        if(!token){
            throw new UnauthorizedException('token no proporcionado');
        } 
        try{
            const secret = process.env.JWT_SECRET;
            const payload = this.jwtService.verify(token, {secret});
            payload.iat= Math.floor(Date.now() / 1000);
            payload.exp= Math.floor(Date.now() / 1000) + 60 * 60;
            request['user'] = payload;
            return true
        }catch(e){
            throw new UnauthorizedException('token no valido');
        }

    }
}