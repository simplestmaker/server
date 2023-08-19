import { User as UserModel } from '@prisma/client';
export class User implements UserModel {
  createdTime: Date;
  updatedTime: Date;
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}
