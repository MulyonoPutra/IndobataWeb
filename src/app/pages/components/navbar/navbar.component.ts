import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a
          class="navbar-brand animate__animated animate__fadeInRightBig"
          href="#"
        >
          <img
            src="assets/img/logo-indobata.png"
            class="logo-indobata animate__animated animate__bounceInDown"
            alt="logo"
          />
          Indobata
        </a>
        <a *ngIf="showLoadingIndicator">Loading...</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item animate__animated animate__zoomInRight">
              <a
                class="nav-link"
                [routerLink]="['/home']"
                routerLinkActive="router-link-active"
              >
                Home
              </a>
            </li>
            <li class="nav-item animate__animated animate__zoomInRight">
              <a
                class="nav-link"
                [routerLink]="['/product']"
                routerLinkActive="router-link-active"
              >
                Product
              </a>
            </li>
            <li class="nav-item animate__animated animate__zoomInRight">
              <a
                class="nav-link"
                [routerLink]="['/about-us']"
                routerLinkActive="router-link-active"
              >
                About Us
              </a>
            </li>
            <li class="nav-item animate__animated animate__zoomInRight">
              <a
                class="nav-link"
                [routerLink]="['/our-clients']"
                routerLinkActive="router-link-active"
              >
                Our Clients
              </a>
            </li>
            <li class="nav-item animate__animated animate__zoomInRight">
              <a
                class="nav-link"
                [routerLink]="['/contact-us']"
                routerLinkActive="router-link-active"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  
  showLoadingIndicator = true;

  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }

  ngOnInit(): void {}
}
