import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public seccion: string
  constructor() { }

  ngOnInit() {
  }

  public establecer(seccion: string){
    this.seccion = seccion;
  }
}
