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
}

//création d'une 'fake api' en local : https://github.com/typicode/json-server

// API sur serveur : https://jsonplaceholder.typicode.com
