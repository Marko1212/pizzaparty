import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from './../services/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss']
})
export class PizzaAddComponent implements OnInit {
 
  pizza: Pizza = new Pizza();
  //constructeur implicite, il faut initialiser la propriété (champ) de l'objet, 
  //pour éviter l'érreur dans la console (formulaire)

  constructor(private pizzaService: PizzaService, private router: Router) { }
  //il faut mettre private pour que ça marche!

  ngOnInit(): void {
  }

  addPizza() {
    //console.log(this.pizza);
    this.pizzaService.createPizza(this.pizza).then(pizza => {
      console.log(pizza);
      this.router.navigate(["/pizzas"]);
      
      
    });

    
  }

}
