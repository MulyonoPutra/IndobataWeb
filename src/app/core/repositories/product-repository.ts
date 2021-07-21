import { Observable } from 'rxjs';

import { Product } from '../domain/entities/product';
import { Search } from '../domain/dto/search';

export abstract class ProductRepository {

  abstract getAllProduct(): Observable<Product[]>;

  abstract addProduct(product: Product): Observable<any>;

  abstract updateProduct(product: Product): Observable<any>;

  abstract search(search: Search): Observable<any>;

  abstract getProductById(id: number): Observable<any>;

  abstract getProductByCategoryId(categoryId: number): Observable<any>;

}
