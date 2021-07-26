import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fry Chicken', 'Korean Fry chicken', 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
