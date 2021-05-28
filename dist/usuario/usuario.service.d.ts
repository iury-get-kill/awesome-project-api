import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    listar(): Promise<Usuario[]>;
}
