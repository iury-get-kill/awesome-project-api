import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validarUsuario(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
//erro para ver a senha e o email no postmen na {{URL}}/usuario/login aula 28