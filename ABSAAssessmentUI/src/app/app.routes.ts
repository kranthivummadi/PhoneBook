
import { Routes } from '@angular/router'

import { searchContactsComponent } from './searchContacts/searchContacts.component'
import { addContactsComponent } from './addContacts/addContacts.component'

export const mainNavigationRoutes: Routes = [
    { path: '', component: addContactsComponent },
    { path: 'addContact', component: addContactsComponent },
    { path: 'searchContact', component: searchContactsComponent }
];