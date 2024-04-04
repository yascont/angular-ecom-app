import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CacheService } from '../../app/CachService';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  CacheServ:CacheService = inject(CacheService)
  showSearch: boolean = false;

  
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
