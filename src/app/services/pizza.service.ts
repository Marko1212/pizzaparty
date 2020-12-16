import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas() : Promise<any> {

    return this.http.get('http://localhost:3000/pizzas/').toPromise();
  }
}
