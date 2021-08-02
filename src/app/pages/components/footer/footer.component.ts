import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div
        style="
      display: flex;
      justify-content: center;
      color: rgb(87, 85, 85);
      font-family: 'Trebuchet MS', sans-serif;
    "
      ></div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
