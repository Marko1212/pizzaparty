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

  loading: boolean = false;


  constructor(private pizzaService: PizzaService, private router: Router) { }
  //il faut mettre private pour que ça marche!

  ngOnInit(): void {
  }

  addPizza() {
    this.loading = true;
    //console.log(this.pizza);
    this.pizzaService.createPizzaSlowly(this.pizza).then(pizza => {
      console.log(pizza);
      this.router.navigate(["/pizzas"]);
      //on arrête le loading (cette dernière ligne est optionnelle car on est redirigé sur une autre page, donc, loading passe automatiquement à false)
      this.loading = false;
    });

    
  }

}
