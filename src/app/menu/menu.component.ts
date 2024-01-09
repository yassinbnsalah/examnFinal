import { Component, Input } from '@angular/core';
import { Menu } from '../model/Menu';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu!:Menu;

  constructor(private router : Router, private service : ProjectService ){}

  GoToMenuDetails(){
    this.router.navigate(['/details/'+this.menu.id])
  }
  ReserverMenu(){
    this.menu.reservations.push(1)
    this.service.updateMenu(this.menu.id, this.menu).subscribe(()=>{
      console.log("reservation Approved succefully");
      
    })
  }
}
