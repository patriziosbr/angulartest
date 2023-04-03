import { Component, OnInit } from '@angular/core';
import { CucineListService } from '../service/cucine-list.service';

@Component({
  selector: 'app-cucine-list',
  templateUrl: './cucine-list.component.html',
  styleUrls: ['./cucine-list.component.scss']
})
export class CucineListComponent implements OnInit{
  cucineLists:any;
  constructor(private service:CucineListService){}

  ngOnInit() {
    this.service.getCucineList()
      .subscribe(response => {
        this.cucineLists = response;
    });
  }
}
