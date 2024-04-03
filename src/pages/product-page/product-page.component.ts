import { Component } from '@angular/core';
import { CategoryCardsComponent } from '../../components/category-cards/category-cards.component';
import { fetchProducts } from '../../app/fetshProductsService';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';



interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CategoryCardsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private fetch = inject(fetchProducts)
  
  product : Product = {};
  id: string = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.fetchProducts();
    });
  }

  fetchProducts() {
      this.fetch.getSpeceficProducts(parseInt(this.id)).subscribe((prod: Product) =>
         this.product = prod);
  }
}

