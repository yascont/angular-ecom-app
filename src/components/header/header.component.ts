import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

}
