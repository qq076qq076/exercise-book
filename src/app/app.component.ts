import { Component, OnInit } from '@angular/core';
import { routes } from './app-routing.module';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercise-book';
  routerList: RouteCus[] = [];


  ngOnInit(): void {
    routes.forEach((routes) => {
      if (routes.data && (routes.data as RouteCus).title) {
        this.routerList.push(routes as RouteCus);
      }
    });
  }
}

interface RouteCus extends Route {
  data: {
    title: string;
  }
}
