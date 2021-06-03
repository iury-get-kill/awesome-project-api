import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { tokenProviders } from './token.providers';
import { TokenService } from './token.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
  exports: [TokenService]
})
export class TokenModule {}

//erro para ver a senha e o email no postmen na {{URL}}/usuario/login aula 28