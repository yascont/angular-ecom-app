import { Component } from '@angular/core';
import { CartProductComponent } from '../../components/cart-product/cart-product.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartProductComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
