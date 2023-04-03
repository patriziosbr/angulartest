import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private url = 'http://localhost:5000/api/restaurant/getRestaurants/0/10';
   
  constructor(private httpClient: HttpClient) { }
  
  getRestaurant(){
    return this.httpClient.get(this.url);
  }
}
