import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/Menu';
import { ProjectService } from '../service/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  MarkForm !: FormGroup;
 
  menu !: Menu;
  constructor(private service: ProjectService, private ac: ActivatedRoute,private fb: FormBuilder ,
    private router : Router) { }
  ngOnInit(): void {
    this.MarkForm = this.fb.group({
      Mark: ['', [Validators.required,Validators.pattern('^[1,2,3,4,5]')]],
    })
    this.getMenuById()
  }


  getMenuById() {
    this.service.getMenuByID(this.ac.snapshot.params["id"]).subscribe((data) => {
      this.menu = data;
    })
  }

  updateMenuMark(){
    this.menu.mark = (this.menu.mark + Number(this.MarkForm.value.Mark))/2 ; 
    this.service.updateMenu(this.ac.snapshot.params['id'] , this.menu).subscribe((data) =>{
      console.log("mark updated sucecfully");
      
    })
  }



}
