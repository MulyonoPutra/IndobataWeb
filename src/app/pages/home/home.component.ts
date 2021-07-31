import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/domain/entities/product';
import { ProductRepository } from 'src/app/core/repositories/product-repository';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <div class="jumbotron" style="color: #40a11ade;">
        <div
          class="title-header animate__animated animate__zoomInDown font-poppins"
        >
          <h1>Indobata</h1>
          <h2 style="color: #6b6363a1;">
            Concrete Roof Tile & Concrete Block Manufacturing
          </h2>
        </div>
      </div>

      <section
        class="mb-4 animate__animated animate__flipInY"
        data-aos="flip-left"
      >
        <br />
        <div id="article" class="row justify-content-center rounded-top">
          <div class="card vision mr-2 animate__fadeInTopLeft">
            <img
              class="card-img-top mb-2 mt-3"
              srcset="assets/img/business.png"
              alt="Save Money"
            />
            <h4
              class="font-poppins"
              style="text-align: center; color: rgb(36, 35, 35);"
            >
              Save Money
            </h4>
            <div class="card-body">
              <p class="card-text" style="text-align: center;">
                Indobata is able to give competitive selling prices for the
                community by using high-quality concrete materials and competing
                with national construction companies.
              </p>
            </div>
          </div>
          <div class="card vision mr-2">
            <img
              class="card-img-top mb-2 mt-3"
              src="assets/img/medal.png"
              alt="Good Quality"
            />
            <h4
              class="font-poppins"
              style="text-align: center; color: rgb(36, 35, 35);"
            >
              Good Quality
            </h4>
            <div class="card-body">
              <p class="card-text" style="text-align: center;">
                Using high-quality raw materials under strict supervision in
                accordance with established standards, so that it could be
                utilized in a wide range of projects on a national and local
                scale.
              </p>
            </div>
          </div>
          <div class="card vision me-2">
            <img
              class="card-img-top mb-2 mt-3"
              src="assets/img/management.png"
              alt="Innovation"
            />
            <h4
              class="font-poppins"
              style="text-align: center; color: rgb(36, 35, 35);"
            >
              Innovation
            </h4>
            <div class="card-body">
              <p class="card-text" style="text-align: center;">
                Indobata continues to produce innovative products in order to
                keep up with the expanding architectural design trend.
              </p>
            </div>
          </div>
        </div>
        <br />
      </section>
      <!-- <hr class="line"> -->

      <div class="mb-4" style="color: rgb(109, 109, 107);">
        <div class="container">
          <article style="text-align: center;">
            <p>
              Indobata was established in 2003.
              <br />
              is a manufacturer building materials such as concrete tiles,
              tiles, and paving stones (conblocks),
              <br />
              Various kinds of press bricks, concrete culverts (culverts),
              roster or loster, kansteen (kanstin), and ceramic tiles.
              <br />
              With a relatively low price, also without missing the product's
              aesthetic value,
              <br />
              We choose the highest-quality raw materials at the best possible
              price, making them comparatively reasonable.
              <br />
              Indobata, on the other hand, continues to place a premium on
              aesthetics and the use of standardized, high-quality raw
              materials.
            </p>
          </article>
        </div>
      </div>

      &nbsp; &nbsp;
      <div class="container">
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
                <p class="text" [innerHTML]="product.description"></p>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
      &nbsp;
      <div class="text-center">

        <button class="btn btn-primary" [routerLink]="['/product']">
          View More..
        </button>
      </div>
      &nbsp;
      <section id="marketplace" style="min-height: 320px;" class="bg-section">
        <div class="container">
          <div class="row pb-4 mb-5">
            <div class="col mb-5 text-center" style="margin-left: 40px;">
              &nbsp;
              <h1 class="font-poppins" style="text-align: center;">
                Tersedia di Marketplace
              </h1>
              <div class="row mt-5" data-aos="zoom-in-down">
                <a href="https://www.tokopedia.com/" target="_blank">
                  <img
                    class="col card-img-top brand1"
                    src="assets/img/tokopedia.png"
                    alt="tokopedia"
                  />
                </a>
                <a href="https://www.bukalapak.com/" target="_blank">
                  <img
                    class="col card-img-top brand"
                    src="assets/img/bukalapak.png"
                    alt="Bukalapak"
                  />
                </a>
                <a href="https://www.lazada.com/" target="_blank">
                  <img
                    class="col card-img-top brand"
                    src="assets/img/lazada.png"
                    alt="Lazada"
                  />
                </a>
                <a href="https://www.shopee.com/" target="_blank">
                  <img
                    class="col card-img-top brand"
                    src="assets/img/shopee.png"
                    alt="Shopee"
                  />
                </a>
                <a href="https://www.blibli.com/" target="_blank">
                  <img
                    class="col card-img-top brand"
                    src="assets/img/blibli.png"
                    alt="Blibli"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  public productCollection: Product[] = [];

  constructor(private productService: ProductRepository) {}

  ngOnInit(): void {
    this.loadAllProducts();
    const btn = document.getElementById('btn-product');

    btn.innerHTML = 'View Our Product';
    btn.style.borderRadius = '25px';
  }

  loadAllProducts(): void {
    this.productCollection = [];
    this.productService.getAllProduct().subscribe((value: Product[]) => {
      this.productCollection = value.slice(1, 4);
      console.log(value);
    });
  }
}
