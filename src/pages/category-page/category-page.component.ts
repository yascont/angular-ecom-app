import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryCardsComponent } from '../../components/category-cards/category-cards.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CategoryCardsComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  
  category: string = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
    });
}}
