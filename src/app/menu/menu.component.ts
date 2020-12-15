import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isCollapsed = false;
  @Input() navTitle : string;

  //valeur par défaut : light
  @Input() color = "light";

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
