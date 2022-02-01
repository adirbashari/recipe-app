import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'recipe 1',
      description: 'recipe 1 description',
      imagePath: 'image recipe 1',
      ingredients: [
        { name: 'apple', amount: 3 },
        { name: 'tomato', amount: 7 },
      ],
    },
    {
      name: 'recipe 2',
      description: 'recipe 2 description',
      imagePath: 'image recipe 2',
      ingredients: [
        { name: 'banana', amount: 5 },
        { name: 'afarsek', amount: 1 },
      ],
    },
  ];
  changedRecipes = new Subject<Recipe[]>();
  constructor() {}

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
