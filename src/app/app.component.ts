import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

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

  ngOnInit(): void {
    AOS.init();
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');
    const jumbotron = document.querySelector('jumbotron');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('slide');
        jumbotron.classList.remove();

    });
  }
  
}






