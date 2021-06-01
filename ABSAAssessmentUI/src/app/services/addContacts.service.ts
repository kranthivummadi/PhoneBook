import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/from';

@Injectable()
export class addContactsService {

    public saveDetailsURL = "http://localhost:5316/api/phoneBook";
    constructor(private _http: HttpClient) {

    }

    public savePhoneDetails(phoneDetails: any): Observable<any> {
        return this._http.post(this.saveDetailsURL, phoneDetails);
    }

} 