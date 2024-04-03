import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';


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

  ngOninit(){}

  handleclick(){
    this.router.navigate([`/product/${this.id}`])
  }
}
