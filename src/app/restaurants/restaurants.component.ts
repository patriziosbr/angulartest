import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants:any;
  restaurantNumber: number | undefined;
  constructor(private service:RestaurantsService){}

  ngOnInit() {
    this.service.getRestaurants().subscribe((response : any) => {
        this.restaurants = response.array;
        this.restaurantNumber = response.totalCount
    });
  }
}
