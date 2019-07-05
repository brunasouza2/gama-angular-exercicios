import { Component, OnInit, Input } from '@angular/core';
import { ItemLanguage } from 'src/typings/ItemLanguage';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {
  @Input() data: ItemLanguage;
  
  constructor() { }

  ngOnInit() {
  }

}
