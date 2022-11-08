import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Categorie, Item } from "./menu.models";
import { shareReplay, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenuService {

  selected$: BehaviorSubject<string> = new BehaviorSubject("26576");
  categories$: Observable<Categorie[]> = this.http.get<Categorie[]>("assets/categories.json").pipe(shareReplay());
  items$: Observable<Item[]> = this.http.get<Item[]>("assets/menu.json").pipe(shareReplay());

  constructor(
    private http: HttpClient
  ) { }

  select(id: string): void {
    this.selected$.next(id);
  }

}
