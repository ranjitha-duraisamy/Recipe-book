import { Ingredient } from './../../shared/Ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('ingredient', {static: true}) ingredientName:ElementRef;
  @ViewChild('amount', {static: true}) amount:ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const ingredient = this.ingredientName.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    this.shoppingService.addIngredient(new Ingredient(ingredient, amount));
  }

}
