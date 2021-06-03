import { Repository } from 'typeorm';
import { Token } from './token.entity';
export declare class TokenService {
    private tokenRepository;
    constructor(tokenRepository: Repository<Token>);
    save(hash: string, username: string): Promise<void>;
}
