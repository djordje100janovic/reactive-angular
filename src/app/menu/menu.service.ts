import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Categorie {
    id: string;
    name: string;
    position: string
}

export interface Item {
    id: string;
    name: string;
    position: string;
    description: string;
    images: string[],
    categoryId: string;
}

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
