import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Search } from '../../domain/dto/search';
import { Product } from '../../domain/entities/product';
import { ProductRepository } from '../../repository/product.repository';
import { TokenService } from '../token.service';

@Injectable()
export class ProductServiceImpl extends ProductRepository {

  public product: Product;

  info: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }),
  };

  constructor(private http: HttpClient, private token: TokenService) {
    super();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUserName(),
      authorities: this.token.getAuthorities(),
    };
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<any>(environment.baseEndpoint + 'api/product');
  }

  addProduct(product: Product): Observable<any> {
    return this.http.product(environment.baseEndpoint + 'api/product', product);
  }

  updateProduct(product: Product): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getProductById(id: number): Observable<any> {
    return this.getAllProduct().pipe(
      mergeMap((result) => result),
      first((product) => product.id === id)
    );
  }

  getProductByCategoryId(categoryId: number): Observable<any> {
    return this.http.get(
      `${environment.baseEndpoint}api/product/search/category/${categoryId}`
    );
  }

  search(search: Search): Observable<any> {
    return this.http
      .product(
        environment.baseEndpoint + 'api/product/search/author',
        search,
        this.httpOptions
      )
      .pipe(map((response: any) => response));
  }
}
