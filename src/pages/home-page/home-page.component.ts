import { Component } from '@angular/core';
import { HomeHeadComponent } from '../../components/home-head/home-head.component';
import { CategoryCardsComponent } from '../../components/category-cards/category-cards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeadComponent, CategoryCardsComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: []
})
export class HomePageComponent {
}
