import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/domain/entities/product';
import { ProductRepository } from 'src/app/core/repositories/product-repository';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-category',
  template: `
    <div
      class="container mb-5"
      *ngIf="productCollection.length > 0; else empty"
    >
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
      <img src="./assets/img/blank.png" class="center" />
      <div class="no-data">Data is Empty!</div>
    </ng-template>
  `,
  styles: [
    `
      .card-img-top {
        border-radius: 10px;
      }

      .no-data {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #5bd32b;
        font-family: 'Poppins', sans-serif;
      }

      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid #dc354500;
        height: 70vh !important;
      }

      .card-img-top {
        border-radius: 10px;
      }

      img {
        float: left;
        width: 350px;
        height: 300px;
        object-fit: cover;
      }

      .btn-primary {
        border-radius: 30px;
        border: 0px solid;
      }

      ul {
        list-style-type: none;
      }

      .center {
        width: 50%;
        margin-left: 20%;
        margin-right: 20%;
        height: 10%;
      }
    `,
  ],
})
export class ProductCategoryComponent implements OnInit {
  public product: Product;

  public productCollection: Product[] = [];

  public currentCategoryId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductRepository,
    private location: Location
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
