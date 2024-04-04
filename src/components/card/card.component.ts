import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from '../../app/CachService';
import { inject } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count : number;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private router: Router) { }


  @Input() img! : string;
  @Input() title! : string;
  @Input() price! : number;
  @Input() id! : number;
  @Input() category! : string;
  @Input() description! : string;

  CacheService : CacheService = inject(CacheService)

  product : Product | null = null
  ngOnInit(){
    this.product = {
      id : this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.img,
      count : 1,
    }
  }

  handleclick(){
    this.router.navigate([`/product/${this.id}`])
  }

  addProduct(){
    this.CacheService.set(this.id.toString(), this.product)
  }
}
