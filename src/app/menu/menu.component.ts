import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isCollapsed = false;
  @Input() navTitle;
  @Input() color = "light";

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
