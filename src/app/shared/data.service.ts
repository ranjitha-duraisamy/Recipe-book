import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-list/recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private recipeService: RecipeService,
    private http: HttpClient ) { }

  saveData() {
    const recipes = this.recipeService.getRecipes();
    this.http.post('https://recipe-book-5e435-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe(res=>{
      console.log("Data Saved Successfully");
    })

  }

  fetchData() {
    return this.http.get('https://recipe-book-5e435-default-rtdb.firebaseio.com/recipes.json')
    .pipe( map(res => {
      const recipes = [];
      for(const key in res) {
        recipes.push(...res[key]);
      }
      return recipes;
    }), tap(recipes => this.recipeService.setRecipes(recipes)));
  }
}
