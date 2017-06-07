import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

import { EmailBlackListService } from './email-black-list.service';

@Directive({
  selector: '[validateEmail][ngModel],[validateEmail][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
  ]
})
export class EmailValidator {

  validator: Function;

  constructor(emailBlackList: EmailBlackListService) {
    this.validator = this.validateEmailFactory(emailBlackList);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  validateEmailFactory(emailBlackList: EmailBlackListService) {
    return (c: FormControl) => {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      return EMAIL_REGEXP.test(c.value) && emailBlackList.validate(c.value) ? null : {
        validateEmail: {
          valid: false
        }
      }
    }
  }

}