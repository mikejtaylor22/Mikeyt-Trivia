import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnyComponent } from './components/any/any.component';
import { LandingComponent } from './components/landing/landing.component';
import { GameComponent } from './components/game/game.component';


const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'any', component:AnyComponent},
  {path:'game',component:GameComponent},
  {path:'home',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
