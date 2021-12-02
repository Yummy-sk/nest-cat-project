import { Injectable } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsService {
  async signUp(body: CatRequestDto) {}
}
