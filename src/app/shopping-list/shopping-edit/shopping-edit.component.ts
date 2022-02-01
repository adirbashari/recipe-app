import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editMode = false;
  editedIngredientId: number;
  subscription: Subscription;
  ingredient: Ingredient;
  @ViewChild('form') ingredientForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEdit.subscribe(
      (index) => {
        this.editedIngredientId = index;
        this.editMode = true;
        this.ingredient = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount,
        });
      }
    );
  }

  onAddIngredient(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.editMode) {
      this.shoppingListService.updateIngeredient(
        this.editedIngredientId,
        form.value
      );
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(form.value);
    }
    this.ingredientForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.editMode = false;
    this.ingredientForm.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngeredient(this.editedIngredientId);
    this.onClear();
  }
}
