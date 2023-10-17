import { Pipe, PipeTransform } from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'formErrorsMessage',
  standalone: true,
})
export class FormErrorsMessagePipe implements PipeTransform {

  transform(validationErrors: ValidationErrors): unknown {
    const errors = Object.values(validationErrors);
    return errors[0];
  }
}
