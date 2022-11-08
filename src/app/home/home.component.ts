import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {

  busy: boolean = false;
  error: boolean = false;
  fetchSubject = new Subject<boolean>();
  fetch$ = this.fetchSubject.asObservable();

  categories$ = this.fetch$.pipe(
    tap(() => this.busy = true),
    switchMap((res) =>
        this.http.get<any>('assets/categoriess.json').pipe(
          catchError((err, ) => of([]))
        )
    ),
    tap(() => this.busy = false)
  );

  constructor(
    private http: HttpClient
  ) { }

  fetch(): void {
    this.fetchSubject.next(true);
  }

}
