import { Component, OnInit } from '@angular/core';
import { Categorie, Item, MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public categories: Categorie[] = [];
  public items: Item[] = [];
  public selected: { name: string | undefined; items: Item[] } = { name: "", items: [] }

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.menuService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  selectCategorie(id: string): void {
    this.selected.name = this.categories.find((item: Categorie) => item.id === id)?.name;
    this.selected.items = this.items.filter((item: Item) => item.categoryId === id);
  }

}
