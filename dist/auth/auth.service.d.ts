import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { UsuarioService } from 'src/usuario/usuario.service';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    private tokenService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService, tokenService: TokenService);
    validarUsuario(email: string, senha: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
