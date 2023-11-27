import { Component, OnInit } from '@angular/core';

import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: recipe[] = [
    new recipe(
      'a test recipe',
      'this is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/04/Passion-Fruit-Tart-13-2.jpg.webp'
    ),
    new recipe(
      'a test recipe',
      'this is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/04/Passion-Fruit-Tart-13-2.jpg.webp'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
