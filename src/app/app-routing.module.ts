import { RepeatingLinearGradientComponent } from './pages/repeating-linear-gradient/repeating-linear-gradient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CityDddComponent } from './pages/city-ddd/city-ddd.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { Feature2024Component } from './pages/feature-2024/feature-2024.component';

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
    path: 'animation',
    component: AnimationComponent,
    data: {
      title: 'Animation'
    }
  },
  {
    path: 'repeating-linear-gradient',
    component: RepeatingLinearGradientComponent,
    data: {
      title: 'Repeating Linear Gradient'
    }
  },
  {
    path: 'feature-2024',
    component: Feature2024Component,
    data: {
      title: 'New CSS Features 2024'
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
