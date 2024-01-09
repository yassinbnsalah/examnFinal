import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

const routes: Routes = [
  
  {path:"home", component:HomeComponent},
  {path:'reservation',
  loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)},
  {path:'proposition',
  loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  {path:"details/:id" , component : MenuDetailsComponent},
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
