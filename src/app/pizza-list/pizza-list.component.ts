import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = '4 fromages';
  maSuperPizza: Pizza;

  mesPizzas: Pizza[] = [
    {id: 1, name: 'Reine', price: 12, image : "reine.jpg"},
    {id: 2, name: '4 fromages', price: 13, image :"4-fromages.jpg"},
    {id: 3, name: 'Orientale', price: 11, image : "orientale.jpg"},
    {id: 4, name: 'Cannibale', price: 9, image : "cannibale.jpg"},
  ];

  onSelect(pizza: Pizza) {
    console.log(pizza);
    this.maSuperPizza = pizza;
  }

}
