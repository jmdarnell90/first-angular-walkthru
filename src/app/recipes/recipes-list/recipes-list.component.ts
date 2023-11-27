import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/04/Passion-Fruit-Tart-13-2.jpg.webp'
    ),
    new Recipe(
      'another test recipe',
      'this is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/04/Passion-Fruit-Tart-13-2.jpg.webp'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
