import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';


@Directive({
    selector: '[searchTextValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: validateSearchDirective, multi: true }]
})
export class validateSearchDirective implements Validator {


    companiesList = [];
    @Input() isNumber: string;
    constructor() { }

    validate(control: AbstractControl): { [key: string]: any } {

        if (this.isNumber === "2") {
            if (isNaN(control.value)) {
                return { 'searchIsNotNumber': true };
            }
            else if (control.value.length != 10) {
                return { 'searchLengthError': true };
            } {
                return null;
            }
        }
    }

}