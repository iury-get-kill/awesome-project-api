import { ResultadoDto } from 'src/dto/resultado.dto';
import { TokenService } from 'src/token/token.service';
import { ServicoCadastrarDto } from './dto/servico.cadastrar.dto';
import { ServicoService } from './servico.service';
export declare class ServicoController {
    private readonly servicoService;
    private readonly tokenService;
    constructor(servicoService: ServicoService, tokenService: TokenService);
    cadastrar(data: ServicoCadastrarDto, req: any): Promise<ResultadoDto>;
}
