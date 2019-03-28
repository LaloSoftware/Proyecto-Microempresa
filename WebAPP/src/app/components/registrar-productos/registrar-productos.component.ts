import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styles: []
})
export class RegistrarProductosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public Cancelar(): void{
    this.router.navigate(["/productos"]);
  }

}
