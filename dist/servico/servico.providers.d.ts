import { Connection, Repository } from 'typeorm';
import { Servico } from './servico.entity';
export declare const servicoProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Servico>;
    inject: string[];
}[];
