import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CucineListService {
  private url = 'http://localhost:5000/api/tipologiche/getCuisinesList';
  
  constructor(private httpClient: HttpClient) {}

  getCucineList(){
    return this.httpClient.get(this.url);
  }
  
}
