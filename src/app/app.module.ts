import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CodePlaceComponent } from './components/code-place/code-place.component';
import { IndexComponent } from './pages/index/index.component';
import { CityDddComponent } from './pages/city-ddd/city-ddd.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { RepeatingLinearGradientComponent } from './pages/repeating-linear-gradient/repeating-linear-gradient.component';

@NgModule({
  declarations: [
    AppComponent,
    CodePlaceComponent,
    IndexComponent,
    CityDddComponent,
    AnimationComponent,
    RepeatingLinearGradientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
