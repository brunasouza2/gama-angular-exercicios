import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exercício 1';
  contador = 0;

  ngOnInit(){

  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
