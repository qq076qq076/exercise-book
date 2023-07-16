import { Component, OnInit } from '@angular/core';
import { routes } from './app-routing.module';
import { ActivationEnd, Route, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercise-book';
  routerList: RouteCus[] = [];

  currentRoute = this.router.events.pipe(
    filter((event): event is ActivationEnd => event instanceof ActivationEnd),
    map((activationEnd: ActivationEnd) => (activationEnd.snapshot as unknown as RouteCus).data.title)
  )

  constructor(private router: Router) {
  }

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
