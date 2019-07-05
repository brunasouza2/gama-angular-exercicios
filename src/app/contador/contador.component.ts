import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title = 'Exercício 1';
  contador = 0;

  constructor() { }

  ngOnInit() {
  }

  
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

}
