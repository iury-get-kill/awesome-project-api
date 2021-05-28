import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    listar(): Promise<Usuario[]>;
}
