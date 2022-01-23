import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    { name: 'recipe1', description: 'recipe1 description', imagePath: '' },
    { name: 'recipe2', description: 'recipe2 description', imagePath: '' },
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}
  onRecipeSlected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
