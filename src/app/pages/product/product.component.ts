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
        <div class="d-flex bd-highlight mb-3">
          <div class="me-auto p-2 bd-highlight">
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <ul class="dropdown-item" *ngFor="let category of categories">
                  <li [routerLink]="'/category/' + category.id">
                    {{ category.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div
              style="width: 300px"
              class="input-group mb-3"
              *ngIf="isLoggedIn"
            >
              <input
                type="text"
                class="form-control"
                placeholder="Find By Author"
                aria-label="Find By Author"
                aria-describedby="searchAuthor"
                [(ngModel)]="search.searchKey"
                [ngModelOptions]="{ standalone: true }"
              />
              <button
                class="btn btn-primary"
                type="button"
                id="search-btn"
                [disabled]="!search.searchKey"
              >
                Search
              </button>
              <button
                class="btn btn-primary"
                type="button"
                id="search-btn"
                [disabled]="!search.searchKey"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
        &nbsp;

        <div class="row">
          <div
            class="mt-3 col-md-4 position-relative"
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
                <h5 class="card-title">{{ product?.productName }}</h5>
                <p>{{ product.category_product?.name }}</p>
                <p class="text" [innerHTML]="product.content"></p>
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
    this.loadAllProducts();
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
