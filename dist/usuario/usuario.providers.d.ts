import { Connection, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Usuario>;
    inject: string[];
}[];
