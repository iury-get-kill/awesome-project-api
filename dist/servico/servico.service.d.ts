import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { Servico } from './servico.entity';
import { ServicoCadastrarDto } from './dto/servico.cadastrar.dto';
import { Usuario } from 'src/usuario/usuario.entity';
export declare class ServicoService {
    private servicoRepository;
    constructor(servicoRepository: Repository<Servico>);
    cadastrar(data: ServicoCadastrarDto, usuario: Usuario): Promise<ResultadoDto>;
}
