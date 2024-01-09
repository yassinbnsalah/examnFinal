import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  menus !: Menu[] ; 

  constructor(private service : ProjectService){}
  ngOnInit(): void {
    this.getAllMenu()
  }

  getAllMenu(){
    this.service.getMenu().subscribe((data) =>{
      this.menus = data ;
    })
  }
}
