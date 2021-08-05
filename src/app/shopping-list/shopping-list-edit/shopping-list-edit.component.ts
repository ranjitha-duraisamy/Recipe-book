import { Ingredient } from './../../shared/Ingredient.model';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: true}) editForm: NgForm;
  editIngredient: Ingredient;
  editIngredientSubscription: Subscription;
  editMode: boolean = false;
  editId: number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.editIngredient.subscribe(id => {
      this.editId = id;
      this.editIngredient = this.shoppingService.getIngredients()[id];
      this.editMode = true;
      this.editForm.form.patchValue({
        ingredient: this.editIngredient.name,
        amount: this.editIngredient.amount
      })
    })  
  }

  onAdd(): void {
    const ingredient = this.editForm.value.ingredient;
    const amount = this.editForm.value.amount;
    if(this.editMode) {
      this.shoppingService.updateIngredient(this.editId, new Ingredient(ingredient, amount));
    }else {
      this.shoppingService.addIngredient(new Ingredient(ingredient, amount));
    }
    this.onClear();
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editId);
  }

  onClear(): void {
    this.editForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    if(this.editIngredientSubscription) {
      this.editIngredientSubscription.unsubscribe();
    }
  }

}
