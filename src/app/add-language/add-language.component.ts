import { Component, OnInit } from '@angular/core';
import { ItemLanguage } from 'src/typings/ItemLanguage';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  language: ItemLanguage = {
    id: null,
    name: '',
    creator: '',
    year: null,
  }

  constructor(private laguagesService: LanguagesService, private router: Router) { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.language);
    this.laguagesService.adicionarTodo(this.language).subscribe(() =>{
      alert('Language adicionada com sucesso');
      this.router.navigateByUrl('/languages');
    })
  }

}
