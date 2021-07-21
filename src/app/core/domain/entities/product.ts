export interface Product {
  id?: number;
  productName?: string;
  description?: string;
  sku?: string;
  size?: string;
  price?: string;
  imagesContentType?: string;
  images?: string;
  category_product?: Category | null;
}

export class IProduct implements Product {
  constructor(
    public id?: number,
    public productName?: string,
    public description?: string,
    public sku?: string,
    public size?: string,
    public price?: string,
    public imagesContentType?: string,
    public images?: string,
    public category_product?: Category | null,
  ) {}
}

