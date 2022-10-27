import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Categorie, Item } from "./menu.models";
import { shareReplay, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>("assets/categories.json");
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>("assets/menu.json");
  }

}
