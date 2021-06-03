import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { TokenService } from 'src/token/token.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
      private usuarioService: UsuarioService,
      private jwtService: JwtService,
      private tokenService: TokenService
    ) {}

    async validarUsuario(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(email);
        if (usuario && bcrypt.compareSync(senha, usuario.password)) {
          const { password, ...result } = usuario;
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        const token = this.jwtService.sign(payload)
        
        return {
          access_token: token
        };
      }
}
//erro para ver a senha e o email no postmen na {{URL}}/usuario/login aula 28