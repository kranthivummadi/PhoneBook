
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

import { addContactsService } from '.././services/addContacts.service'

@Component({
    selector: 'add-Contacts',
    templateUrl: './addContacts.component.html'
})
export class addContactsComponent implements OnInit {

    addContactsForm: FormGroup;
    sucessResponse: boolean;
    errorResponse: boolean;
    defaultValue: number = -1;
    roomNumbers = [
        { id: 1, value: 'ONE' },
        { id: 2, value: 'TWO' },
        { id: 3, value: 'THREE' },
        { id: 4, value: 'FOUR' },
    ];

    constructor(private fb: FormBuilder, private _contactService: addContactsService) {

    }

    ngOnInit() {
        this.prePopulate();
    }

    prePopulate() {
        this.addContactsForm = this.fb.group({
            name: ['', Validators.required],
            contactNumber: ['', Validators.required],
        });
    }

    onUnitsSubmit() {

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let phoneDetails = {
            "Phone_Number": this.addContactsForm.controls['contactNumber'].value,
            Name: this.addContactsForm.controls['name'].value, 
            "Created_Date": date
        }
        this._contactService.savePhoneDetails(phoneDetails).subscribe(response => {
            if (response) {
                this.sucessResponse = true;
                this.errorResponse = false;
            } else {
                this.sucessResponse = false;
                this.errorResponse = true;
            }

            setTimeout(() => {
                this.resetForm();
            }, 5000);
        });
    }

    unitIdChange() {

    }

    resetForm() {
        this.addContactsForm.reset();
        this.sucessResponse = false;
        this.errorResponse = false;
        this.prePopulate();
    }
}