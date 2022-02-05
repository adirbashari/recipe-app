import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];
  changedRecipes = new Subject<Recipe[]>();
  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.changedRecipes.next([...this.recipes]);
  }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.changedRecipes.next([...this.recipes]);
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.changedRecipes.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.changedRecipes.next([...this.recipes]);
  }
}
