import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pageNumber$: Observable<number> = this.activatedRoute.queryParams.pipe(
    map((param) => Number(param.page) || 0)
  );

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  addQueryParam() {
    this.pageNumber$.pipe(
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
