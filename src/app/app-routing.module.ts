import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CityDddComponent } from './pages/city-ddd/city-ddd.component';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: '3d-city',
    component: CityDddComponent,
    data: {
      title: '3D City'
    }
  },
  {
    path: '**',
    redirectTo: "index"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
