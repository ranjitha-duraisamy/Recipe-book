import { Ingredient } from './../../shared/Ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('ingredient', {static: true}) ingredientName:ElementRef;
  @ViewChild('amount', {static: true}) amount:ElementRef;
  @Output() add = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const ingredient = this.ingredientName.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    this.add.emit(new Ingredient(ingredient, amount));
  }

}
