import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CacheService } from '../../app/CachService';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  router: Router = inject(Router)
  CacheServ:CacheService = inject(CacheService)
  showSearch: boolean = false;

  search = '';

  onKey(event: any) {
    this.search = event.target.value;
  }

  onEnter()
  {
    this.router.navigate([`/category/${this.search}`]);
  }
  
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
