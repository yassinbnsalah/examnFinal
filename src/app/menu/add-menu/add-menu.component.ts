import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  menuToAdd !: Menu ; 
  MenuForm !: FormGroup;
  constructor(private fb: FormBuilder, private service : ProjectService , 
    private router : Router) { }
    ngOnInit(): void {
      this.MenuForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', [Validators.required,Validators.minLength(10)]],
      })
    }

    addMenu(){
      this.menuToAdd = this.MenuForm.value;
      this.menuToAdd.approved = false ; 
      this.menuToAdd.mark = 0 ; 
      this.service.AddMenu(this.menuToAdd).subscribe(()=>{
        console.log("menu created succeffuly ");
        
      })
    }

}
