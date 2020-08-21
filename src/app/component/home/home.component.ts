import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const btn = document.getElementById('btn-product');
    const article = document.getElementById('article');

    btn.innerHTML = 'View Our Product';
    btn.style.borderRadius = '25px';
  }
}
