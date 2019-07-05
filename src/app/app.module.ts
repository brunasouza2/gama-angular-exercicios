import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './languages/languages.component';
import { ContadorComponent } from './contador/contador.component';
import { Routes, RouterModule } from '@angular/router';
import { LanguageItemComponent } from './language-item/language-item.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { FormsModule } from '@angular/forms';
import { BoolPipe } from './bool.pipe';

const routes: Routes = [
  {path: 'counter', component : ContadorComponent},
  {path: 'languages', component : LanguagesComponent},
  {path: 'languages/add', component : AddLanguageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    ContadorComponent,
    LanguageItemComponent,
    AddLanguageComponent,
    BoolPipe,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
