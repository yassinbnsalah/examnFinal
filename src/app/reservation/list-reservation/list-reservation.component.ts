import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  menus : Menu[] = []; 

  constructor(private service : ProjectService){}
  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.service.getMenu().subscribe((data)=>{

      data.forEach((element)=>{
        element.reservations.forEach((resID)=>{
            if(resID==1){
              this.menus.push(element);
            }
        })
      })
    })
  }
}
