import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemLanguage } from 'src/typings/ItemLanguage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private httpClient: HttpClient) { }

  getLanguages(): Observable<ItemLanguage[]> {
    return this.httpClient.get<ItemLanguage[]>('https://alefesouza.dev/gama/languages.php');
  }
}
