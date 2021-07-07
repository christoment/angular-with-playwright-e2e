import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  addQueryParam() {
    this.activatedRoute.queryParams.pipe(
      map((param) => Number(param.page) || 0),
      take(1),
    ).subscribe((pageCount) => {
      this.router.navigate([], {
        queryParams: {
          page: pageCount + 1,
        },
      });
    });
  }

  removeQueryParam() {
    this.router.navigate([], {
      queryParams: {},
    });
  }
}
