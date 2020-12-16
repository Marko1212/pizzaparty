import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza';
import { PizzaService } from '../services/pizza.service';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  maSuperPizza: Pizza;
  mesPizzas: Pizza[];
  
  //pizzaService est une propriété de l'objet PizzaListComponent
  // de même que maSuperPizza et mesPizzas
  //injection de dépendance via le constructeur
  constructor( private pizzaService : PizzaService ) { }

  ngOnInit(): void {
    
    //console.log(this.pizzaService.getPizzas());

    //on résout la promesse
    this.pizzaService.getPizzas().then(pizzas => {
      //console.log(pizzas);
      this.mesPizzas = pizzas;
    });
   
  }

  onSelect(pizza: Pizza) {
    console.log(pizza);
    this.maSuperPizza = pizza;
    window.scrollTo(0, 0);
  }

}
