import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/core/domain/dto/search';
import { Category } from 'src/app/core/domain/entities/category';
import { Product } from 'src/app/core/domain/entities/product';
import { CategoryRepository } from 'src/app/core/repositories/category-repository';
import { ProductRepository } from 'src/app/core/repositories/product-repository';

@Component({
  selector: 'app-product',
  template: `
    <div class="jumbotron" style="color: #40a11ade;">
      <div
        class="title-header animate__animated animate__zoomInDown font-poppins"
      >
        <h1>Our Product</h1>
        <div style="color: #ffffff23;">
          <h2>Indobata</h2>
          <h3>Concrete Roof Tile & Concrete Block Manufacturing</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mt-4 mb-2" data-aos="zoom-out-left">
        <div class="container">
          <!-- Button -->
          <div class="row">
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Genteng Beton
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Paving Block
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Roster
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Batako Press
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Kanstin
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Buis Beton
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Rangka Atap Baja Ringan
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Ubin Difabel
            </button>
          </div>
          <!-- Button -->
        </div>
        &nbsp;

        <div class="row">
          <div
            class="mt-3 col-md-3 position-relative"
            *ngFor="let product of productCollection"
          >
            <div class="card box" style="width: 21rem" data-aos="zoom-in">
              <img
                [src]="
                  'data:' +
                  product.imagesContentType +
                  ';base64,' +
                  product.images
                "
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{ product?.title }}</h5>
                <p>{{ product.category_product?.name }}</p>
                <p class="text" [innerHTML]="product.content"></p>
                <a
                  style="color: #fd0dfd"
                  (click)="productDetailsRoute(product)"
                >
                  <p>Read More..</p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  `,
})
export class ProductComponent implements OnInit {
  public product: Product;

  public isLoggedIn = false;

  public username = '';

  public currentCategoryId: number = 1;

  public productCollection: Product[] = [];

  public categories: Category[] = [];

  public search: Search = new Search();

  constructor(
    private router: Router,
    private productService: ProductRepository,
    private categoryService: CategoryRepository,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAllProducts;
    this.findAllCategory();
    this.activatedRoute.paramMap.subscribe(() => {
      this.handlePostByCategory();
    });
  }

  loadAllProducts(): void {
    this.productCollection = [];
    this.productService.getAllProduct().subscribe((value: Product[]) => {
      this.productCollection = value;
      console.log(value);
    });
  }

  handlePostByCategory() {
    const hasCategoryId: boolean =
      this.activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId =
        +this.activatedRoute.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 1;
    }
  }

  findAllCategory() {
    this.categories = [];
    this.categoryService.getAllCategory().subscribe((value: Category[]) => {
      this.categories = value;
      console.log(value);
    });
  }

  productDetailsRoute(product: any): void {
    this.product = product;
    this.router.navigateByUrl('/product-details/' + product.id);
  }
}
