import { Component, ViewChild, ElementRef } from '@angular/core';
import { CategoryCardsComponent } from '../../components/category-cards/category-cards.component';
import { fetchProducts } from '../../app/fetshProductsService';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CacheService } from '../../app/CachService';


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
  count? :number
}


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CategoryCardsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  @ViewChild('count') count!: ElementRef;

  private activatedRoute = inject(ActivatedRoute);
  private fetch = inject(fetchProducts)
  private cache = inject(CacheService)
  
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

  handleNewElem()
  {
    console.log("test")
    const count = this.count.nativeElement.value;
    this.product.count = parseInt(count)
    if(this.product && this.product.id)
      this.cache.set((this.product.id).toString(), this.product)
  }
}

