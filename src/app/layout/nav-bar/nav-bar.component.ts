import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faStar, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faAbout = faStore;
  faProduct = faStar;
  faCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
