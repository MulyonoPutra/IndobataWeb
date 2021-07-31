import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/domain/entities/product';
import { ProductRepository } from 'src/app/core/repositories/product-repository';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-category',
  template: `
    <div class="container" *ngIf="productCollection.length > 0; else empty">
      <button class="btn btn-primary" (click)="goBack()">Back</button>
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

            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    &nbsp;
    <ng-template #empty>
      <p>No Data</p>
    </ng-template>
  `,
  styles: [],
})
export class ProductCategoryComponent implements OnInit {
  public product: Product;

  public productCollection: Product[] = [];

  public currentCategoryId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductRepository,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.getProductByCategoryId();
    });
  }

  getProductByCategoryId(): void {
    const hasCategoryId: boolean =
      this.activatedRoute.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId =
        +this.activatedRoute.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 1;
    }

    this.productService
      .getProductByCategoryId(this.currentCategoryId)
      .subscribe((data) => {
        this.productCollection = data;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
