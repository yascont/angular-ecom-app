import { Component, inject } from '@angular/core';
import { CartProductComponent } from '../../components/cart-product/cart-product.component';
import { CacheService } from '../../app/CachService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartProductComponent, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  products: any[] = [];
  cacheService: CacheService = inject(CacheService)

  ngOnInit(){
    this.getAllData()
  }
  getAllData() {
    const allData = this.cacheService.getAll();
    this.products = Object.keys(allData);
  }

  deleteAll()
  {
    this.cacheService.clear()
  }
}
