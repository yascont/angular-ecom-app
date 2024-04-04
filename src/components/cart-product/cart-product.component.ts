import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CacheService } from '../../app/CachService';
import { inject } from '@angular/core';

@Component({
  selector: 'cartProduct',
  standalone: true,
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
  cache:CacheService = inject(CacheService)
  product : any
  @Input() key: any;

  ngOnInit()
  {
    this.product = this.cache.get(this.key)
  }

  handleMinus(){
    this.cache.updateCount(this.product.id, this.product.count - 1 )
    this.product = this.cache.get(this.key)
    if (this.product.count == 0)
      this.cache.remove(this.key)
  }

  handlePlus(){
    this.cache.updateCount(this.product.id, this.product.count + 1)
    this.product = this.cache.get(this.key)
    console.log(this.product.count)
  }
}
