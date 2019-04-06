import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MIN';
  seccion: string = "Ventas";
  constructor(){
    this.establecerSeccion("Ventas");
  }
  public establecerSeccion(seccion:string){
    this.seccion = seccion;
  }
}
