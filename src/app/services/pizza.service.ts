import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzas() : Pizza[] {

    return [
      {id: 1, name: 'Reine', price: 12, image : "reine.jpg"},
      {id: 2, name: '4 fromages', price: 13, image :"4-fromages.jpg"},
      {id: 3, name: 'Orientale', price: 11, image : "orientale.jpg"},
      {id: 4, name: 'Cannibale', price: 9, image : "cannibale.jpg"},
    ];
  }
}
