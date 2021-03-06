import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentDate = new Date();
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBurgerBtn() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
