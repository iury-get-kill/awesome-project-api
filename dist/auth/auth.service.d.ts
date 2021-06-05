import { HttpException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    private tokenService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService, tokenService: TokenService);
    validarUsuario(email: string, senha: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    loginToken(token: string): Promise<HttpException | {
        access_token: string;
    }>;
}
