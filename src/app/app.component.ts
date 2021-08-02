import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title: 'indobata';

  showLoadingIndicator = true;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
