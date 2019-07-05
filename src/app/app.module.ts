import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './languages/languages.component';
import { ContadorComponent } from './contador/contador.component';
import { Routes, RouterModule } from '@angular/router';
import { LanguageItemComponent } from './language-item/language-item.component';

const routes: Routes = [
  {path: 'counter', component : ContadorComponent},
  {path: 'languages', component : LanguagesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    ContadorComponent,
    LanguageItemComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
