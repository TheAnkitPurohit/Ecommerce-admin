import { Billboard, Store } from "@prisma/client";

export interface CategoryBillBoard {
  id: string;
  name: string;
  createdAt: string;
  billboard: Billboard;
}

interface Size {
  id: string;
  storeId: string;
  store: Store;
  name: string;
  value: string;
  products: ProductTypes[];
  createdAt: Date;
  updatedAt: Date;
}

interface Color {
  id: string;
  storeId: string;
  store: Store;
  name: string;
  value: string;
  products: ProductTypes[];
  createdAt: Date;
  updatedAt: Date;
}

interface Image {
  id: string;
  productId: string;
  product: ProductTypes;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Category {
  id: string;
  storeId: string;
  store: Store;
  billboardId: string;
  billboard: Billboard;
  name: string;
  products: ProductTypes[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductTypes {
  id: string;
  storeId: string;
  store: Store;
  categoryId: string;
  category: Category;
  name: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  sizeId: string;
  size: Size;
  colorId: string;
  color: Color;
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
}
