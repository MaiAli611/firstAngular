import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
 cartoona: string[] = [
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png',
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png'
  ];

  selectedImage: string | null = null;

  openLayer(img: string) {
    this.selectedImage = img;
  }

  closeLayer() {
    this.selectedImage = null;
  }
}


 