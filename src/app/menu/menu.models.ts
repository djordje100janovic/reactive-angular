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
