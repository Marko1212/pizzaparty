import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas() : Promise<Pizza[]> {

    return this.http.get<Pizza[]>('http://localhost:3000/pizzas/').toPromise();
  }

  createPizza(pizza: Pizza) : Promise<Pizza> {

    return this.http.post<Pizza>('http://localhost:3000/pizzas/', pizza).toPromise();

    //entre chevrons, on a le type de l'objet qu'on doit obtenir le cas échéant, après le return de la fonction
    //et la résolution de la Promise qui est renvoyée par la fonction
    //donc, ici, c'est un objet de type Pizza, c'est la dernière Pizza qui vient d'être rajoutée
    //la fonction retourne bien une Promise au départ

  }


}

//création d'une 'fake api' en local : https://github.com/typicode/json-server

// API sur serveur : https://jsonplaceholder.typicode.com
