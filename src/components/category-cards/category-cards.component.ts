import { Component, Input } from '@angular/core';
import { fetchProducts } from '../../app/fetshProductsService';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


@Component({
  selector: 'categoryCards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css'
})
export class CategoryCardsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private fetch: fetchProducts) { }
  
  @Input() page: string = '';
  @Input() num!: string;
  
  products: Product[] = [];
  category: string = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
      this.fetchProducts();
    });
  }

  fetchProducts() {
    if (this.page !== 'home') {
      this.fetch.getSomeProductsCategory(parseInt(this.num), this.category).subscribe((products: Product[]) =>
        this.products = products);
    } else {
      this.fetch.getSomeProducts(parseInt(this.num)).subscribe((products: Product[]) =>
        this.products = products);
    }
  }
}