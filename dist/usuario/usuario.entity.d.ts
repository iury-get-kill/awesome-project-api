import { Servico } from 'src/servico/servico.entity';
export declare class Usuario {
    id: number;
    nome: string;
    email: string;
    password: string;
    telefone: string;
    cpf: string;
    servicos: Servico[];
}
