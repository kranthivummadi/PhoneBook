import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { addContactsComponent } from './addContacts/addContacts.component';
import { searchContactsComponent } from './searchContacts/searchContacts.component';

import { validateSearchDirective } from './customValidations/searchTextValidator';

import { addContactsService } from './services/addContacts.service';
import { searchContactsService } from './services/searchContacts.service';
import { mainNavigationRoutes } from './app.routes';
 

@NgModule({
  declarations: [
    AppComponent, addContactsComponent , searchContactsComponent ,validateSearchDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule,
    RouterModule.forRoot(mainNavigationRoutes),
  ],
  providers: [addContactsService ,searchContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
