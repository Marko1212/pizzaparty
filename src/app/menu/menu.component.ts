import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isCollapsed = false;
  isCollapsedDropdownMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleCollapseDropdownMenu() {
    this.isCollapsedDropdownMenu = !this.isCollapsedDropdownMenu;
  }

}
