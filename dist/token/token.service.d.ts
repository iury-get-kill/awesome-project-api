import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from 'src/auth/auth.service';
import { Usuario } from 'src/usuario/usuario.entity';
export declare class TokenService {
    private tokenRepository;
    private usuarioService;
    private authService;
    constructor(tokenRepository: Repository<Token>, usuarioService: UsuarioService, authService: AuthService);
    save(hash: string, username: string): Promise<void>;
    refreshToken(oldToken: string): Promise<HttpException | {
        access_token: string;
    }>;
    getUsuarioByToken(token: string): Promise<Usuario>;
}
