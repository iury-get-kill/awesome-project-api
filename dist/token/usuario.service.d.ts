import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    listar(): Promise<Usuario[]>;
    cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>;
    findOne(email: string): Promise<Usuario | undefined>;
}
