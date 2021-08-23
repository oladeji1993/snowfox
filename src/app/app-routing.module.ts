import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './snow-fox/about/about.component';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'snowFox',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { 
    path: 'snowFox', 
    loadChildren: () => import('./snow-fox/snow-fox.module').then(m => m.SnowFoxModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
