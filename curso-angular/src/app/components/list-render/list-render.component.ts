import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca", type: "Cachorro", idade: 4},
    {name: "Tom", type: "Gato", idade: 10},
    {name: "Frida", type: "Cachorrinha", idade: 5},
    {name: "Bob", type: "Cavalo", idade: 1},
  ];

  animal: Animal = {
    name: "Bebezinha",
    type: 'Lhasa',
    idade: 16,
  }
   
  animalDetails = ''
  constructor() { }

  ngOnInit(): void {}

  mostrarIdade(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.idade} anos!`;
  }
}
