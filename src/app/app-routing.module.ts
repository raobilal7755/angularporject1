import { ContectComponent } from './contect/contect.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contect',
    component:ContectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
