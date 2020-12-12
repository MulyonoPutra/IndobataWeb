import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const btn = document.getElementById('btn-product');

    btn.innerHTML = 'View Our Product';
    btn.style.borderRadius = '25px';
  }
}
