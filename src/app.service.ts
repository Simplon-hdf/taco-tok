import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log()
    return 'Welcome to the API of our fictional company TacoTok.';
  }
}
