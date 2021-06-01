
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class searchContactsService {

    public searchDetailsURL = "http://localhost:5316/api/phoneBook";
    constructor(private _http: HttpClient) {

    }

    searchPhoneDetails(searchText: any, searchBy: string): Observable<any> {
        return this._http.get(this.searchDetailsURL + "?searchText=" + searchText + "&searchBy=" + searchBy);
    }
}