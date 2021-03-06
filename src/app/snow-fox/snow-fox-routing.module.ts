import { BenefitsComponent } from './benefits/benefits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SnowFoxComponent } from './snow-fox.component';

const routes: Routes = [{ 
  path: '', 
  component: SnowFoxComponent,
  children: [
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
  },

  {
    path: 'benefits',
    component: BenefitsComponent
},
  ]


 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnowFoxRoutingModule { }
