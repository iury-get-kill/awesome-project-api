import { Connection, Repository } from 'typeorm';
import { Token } from './token.entity';
export declare const tokenProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Token>;
    inject: string[];
}[];
