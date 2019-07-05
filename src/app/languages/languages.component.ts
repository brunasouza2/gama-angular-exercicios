import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { ItemLanguage } from 'src/typings/ItemLanguage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages$:  Observable<ItemLanguage[]>;

  constructor(private languagesService: LanguagesService) { }

  ngOnInit() {
    this.languages$ = this.languagesService.getLanguages();
  }

}
