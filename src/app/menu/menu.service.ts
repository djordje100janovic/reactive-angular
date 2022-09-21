import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categorie, Item } from "./menu.models";

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
