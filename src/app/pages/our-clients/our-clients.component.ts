import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clients, IClients } from 'src/app/core/domain/entities/clients';
import { ClientsRepository } from 'src/app/core/repositories/clients-repository';
import { DataUtils } from 'src/app/core/services/utils/data-utils.service';

@Component({
  template: `<div class="jumbotron" style="color: #40a11ade;">
      <div
        class="title-header animate__animated animate__zoomInDown font-poppins"
      >
        <h1>Our Clients</h1>
        <div style="color: #ffffff23;">
          <h2>Indobata</h2>
          <h3>Concrete Roof Tile & Concrete Block Manufacturing</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="mt-3 col-md-4 position-relative"
          *ngFor="let client of clients"
        >
          <div class="card box" style="width: 21rem" data-aos="zoom-in">
            <img
              [src]="
                'data:' + client.imagesContentType + ';base64,' + client.images
              "

              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">{{ client?.name }}</h5>
              <p class="text" [innerHTML]="client.address"></p>
            </div>
            <div class="card-footer">
              <div class="d-flex bd-highlight mb-3">
                <div class="font-size me-auto p-2 bd-highlight">
                  <!-- {{ post?.createdDate | date: "short" }} -->
                  <!--            {{ calculateDiff(post) }}
                  {{ hourTime(post) }} -->
                </div>
                <div class="font-size p-2 bd-highlight"></div>
                <div class="font-size p-2 bd-highlight">
                  <!--   {{ post?.author }} -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div> `,
  styles: [
    `
      .logo-size {
        height: 300px;
        width: 300px;
      }

      .text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        /* number of lines to show */
        -webkit-box-orient: vertical;
      }

      .font-size {
        font-size: 10px !important;
      }

      .card-footer {
        padding: 0.5rem 1rem;
        background-color: #ffffff;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
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
    `,
  ],
})
export class OurClientsComponent implements OnInit {
  clients: Clients[] = [];

  public client: Clients;
  constructor(
    private clientService: ClientsRepository,
    protected dataUtils: DataUtils,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients() {
    this.clients = [];
    this.clientService.getAllClients().subscribe((value: Clients[]) => {
      this.clients = value;
    });
  }

  trackId(index: number, item: IClients): number {
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    return this.dataUtils.openFile(base64String, contentType);
  }

  clientsDetailsRoute(clients: any): void {
    this.client = clients;
    this.router.navigateByUrl('/clients-details/' + clients.id);
  }
}
