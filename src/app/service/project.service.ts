import { Menu } from './../model/Menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  urlM =" http://localhost:3000/Menu"
  constructor(private http : HttpClient) { }

  getMenu():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.urlM)
  }

  getMenuByID(id :any):Observable<Menu>{
    return this.http.get<Menu>(this.urlM+"/"+id)
  }

  updateMenu(id:any , menu : Menu){
    return this.http.put(this.urlM+"/"+id , menu)
  }

  AddMenu(menu:any){
    return this.http.post(this.urlM , menu)
    
  }
}
