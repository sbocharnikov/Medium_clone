import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}
