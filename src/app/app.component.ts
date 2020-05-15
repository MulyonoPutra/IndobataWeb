import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');
    const jumbotron = document.querySelector('jumbotron');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('slide');
        jumbotron.classList.remove();

    });
  }
  
}






