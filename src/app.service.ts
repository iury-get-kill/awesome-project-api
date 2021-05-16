import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world!';
  }

  getObject(): any{
    let objeto ={
      id: 1,
      nome: "iury"
    }
    return objeto
  }
}
