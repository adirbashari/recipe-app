import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    { name: 'apple', amount: 3 },
    { name: 'banana', amount: 23 },
  ];
  ingredienstDetail = new Subject<Ingredient[]>();
  startEdit = new Subject<number>();

  constructor() {}

  getIngredients() {
    return [...this.ingredients];
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredienstDetail.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log('adding ingredients', ingredients);

    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredienstDetail.next([...this.ingredients]);
  }
  updateIngeredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredienstDetail.next([...this.ingredients]);
  }

  deleteIngeredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredienstDetail.next([...this.ingredients]);
  }
}
