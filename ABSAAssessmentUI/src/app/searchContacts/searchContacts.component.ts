
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { searchContactsService } from '.././services/searchContacts.service';
@Component({
    selector: 'search-Contacts',
    templateUrl: './searchContacts.component.html'
})
export class searchContactsComponent {

    searchBy: string;
    searchText: string;
    searchTypeList = [
        { id: 1, value: 'Name' },
        { id: 2, value: 'Number' },
    ];
    searchListDetails = [];
    noSearchRecords: boolean;

    searchModel: any = { searchBy: '', searchText: '' };

    constructor(private fb: FormBuilder, private _searchServ: searchContactsService) {
        this.searchModel.searchBy = this.searchTypeList[0].id;
    }

    prePopulate() {

    }

    searchTypeChange() {
        this.searchListDetails = [];
        this.searchModel.searchText = " ";
        this.noSearchRecords = false;
    }

    onSearchSubmit() {
        if (this.searchModel.searchBy === 2) {
            Number(this.searchModel.searchText);
        }
        this._searchServ.searchPhoneDetails(this.searchModel.searchText, this.searchModel.searchBy).subscribe(response => {
            this.searchListDetails = response;

            if (this.searchListDetails.length > 0) {
                this.noSearchRecords = false;
            } else {
                this.noSearchRecords = true;
            }
        });
    }

    resetForm() {
        this.searchListDetails = [];
        this.searchModel.searchText = " ";
        this.searchModel.searchBy = this.searchTypeList[0].id;
        this.noSearchRecords = false;
    }

    getContactDetails() {


    }


}