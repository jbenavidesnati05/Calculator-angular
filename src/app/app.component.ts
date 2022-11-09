import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Calculator';
  numero1:number = 1;
  numero2:number = 1;
  Resultado:number = 0;

  sumar():void{
    this.Resultado = this.numero1 +this.numero2;
  }
  restar():void{
    this.Resultado = this.numero1 -this.numero2;
  }
  multiplicar():void{
    this.Resultado = this.numero1 *this.numero2;
  }
  dividir():void{
    this.Resultado = this.numero1 /this.numero2;
  }

}
