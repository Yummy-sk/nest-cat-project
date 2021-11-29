import { SchemaFactory, SchemaOptions } from '@nestjs/mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

export class Cat extends Document {
  email: string;

  name: string;

  password: string;

  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
