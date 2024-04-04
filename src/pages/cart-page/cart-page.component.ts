import { Component } from '@angular/core';
import { CartProductComponent } from '../../components/cart-product/cart-product.component';
import { CacheService } from '../../app/CachService';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartProductComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  products: any[] = [];
  constructor(private cacheService: CacheService) {}

  ngOnInit(){
    this.getAllData()
  }
  getAllData() {
    const allData = this.cacheService.getAll();
    this.products = Object.keys(allData);
  }
}
