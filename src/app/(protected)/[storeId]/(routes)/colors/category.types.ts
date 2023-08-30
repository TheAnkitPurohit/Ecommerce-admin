import { Billboard } from "@prisma/client";

export interface CategoryBillBoard {
  id: string;
  name: string;
  createdAt: string;
  billboard: Billboard;
}
