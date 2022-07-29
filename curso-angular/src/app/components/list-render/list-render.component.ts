import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Turca", type: "Cachorro"},
    {name: "Tom", type: "Gato"},
    {name: "Frida", type: "Cachorrinha"},
    {name: "Bob", type: "Cavalo"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
