import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <div class="jumbotron" style="color: #40a11ade;">
      <div class="title-header animate__animated animate__zoomInDown font-poppins">
        <h1>About Us</h1>
        <div style="color: #ffffff23;">
          <h2>Indobata</h2>
          <h3>Concrete Roof Tile & Concrete Block Manufacturing</h3>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="row">
          <div class="card-deck" data-aos="zoom-out-left">
            <div class="card col border-col">
              <div class="card-body">
                <h2 class="font-poppins">
                  We are the expart on this field better solution since 1984.
                </h2>
                <p class="paragraf1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
            </div>
            <div class="card col border-col">
              <div class="card-body">
                <div>
                  <img src="assets/img/network.svg" class="au-img" />
                  <div>
                    <h3 class="left font-poppins" style="font-size: 25px;">
                      Vision
                    </h3>
                    <p class="paragraf">
                      Indobata is always able to meet the needs of the existing
                      market by presenting concrete high - quality products,
                      decorative, and product resistance in all weathers.
                    </p>
                  </div>
                </div>

                <div>
                  <img src="assets/img/business.svg" class="au-img" />
                  <div>
                    <h3 class="left font-poppins" style="font-size: 25px;">
                      Mission
                    </h3>
                    <p class="paragraf">
                      Tak hanya mengembangkan trend desain arsitektur dunia.
                      Namun, Indobata juga mampu memproduksi produk yang
                      inovatif sesuai permintaan customer dan kebutuhan pasar.
                      Indobata akan terus meningkatkan alat produksi dengan
                      standar terbaik, mengembangkan pelayanan agar mampu
                      mambangun dan memelihara kemitraan dengan customer. Serta
                      dapat mencapai kepuasan dan mempermudah customer untuk
                      mendapatkan informasi tentang kualitas produk,
                      ketersediaan produk, maupun waktu pengiriman produk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light bg-section">
      <div class="container" data-aos="zoom-out-right">
        <h1 class="font-poppins" style="text-align: center;">Why Choose Us</h1>

        <div class="card-group">
          <div
            class="card border-col rounded animate__animated animate__bounceInLeft"
          >
            <img
              class="card-img-top why-choose-us mt-3"
              src="assets/img/dollar.svg"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">
                Professional Experience
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div class="card ml-2 border-col rounded animate__animated animate__bounceInDown">
            <img
              class="card-img-top why-choose-us mt-3"
              src="assets/img/man.svg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">
                Clients Satisfaction
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div class="card ml-2 border-col rounded rounded animate__animated animate__bounceInRight">
            <img
              class="card-img-top why-choose-us mt-3"
              src="assets/img/user.svg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">
                Dedicated To Clients
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <div class="card-group mt-2">
          <div class="card border-col rounded animate__animated animate__bounceInLeft">
            <img
              class="card-img-top why-choose-us mt-3"
              src="assets/img/medal.svg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">
                Fince Winner
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div class="card ml-2 border-col rounded animate__animated animate__bounceInDown" >
            <img
              class="card-img-top why-choose-us mt-3"
              src="assets/img/services1.svg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">
                Outstanding Services
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div class="card ml-2 border-col rounded animate__animated animate__bounceInRight" >
            <img
              class="card-img-top why-choose-us mt-3"
              src="assets/img/cup.svg"
              alt="Card image cap"
            />
            <div class="card-body" style="text-align: center;">
              <h5 class="card-title">Best Support Winner</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        &nbsp;
      </div>
    </section>
  `,
})

export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
