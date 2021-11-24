import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  sayHello() {
    return 'sayHello';
  }
}
