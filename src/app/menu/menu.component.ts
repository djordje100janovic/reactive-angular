import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { Categorie, Item } from './menu.models';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public categories: Categorie[] = [];
  public items: Item[] = [];
  public selected: { name: string | undefined; items: Item[] } = { name: "", items: [] }

  categories$ = this.menuService.categories$;
  items$ = this.menuService.items$;

  selected$ = combineLatest([
    this.menuService.selected$,
    this.categories$,
    this.items$
  ]).pipe(
    map(([id, categories, items]) => {
      return {
        name:categories.find((item: Categorie) => item.id === id)?.name,
        items: items.filter((item: Item) => item.categoryId === id)
      }
    })
  );

  constructor(
    private menuService: MenuService
  ) { }

  selectCategorie(id: string): void {
    this.menuService.select(id)
  }

}
