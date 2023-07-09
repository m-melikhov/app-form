import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, Subscriber, delay, map, of } from "rxjs";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
  const value = control.value;
  const result: boolean = emailRegex.test(value);

  if (result) return null;

  return { emailValidator: { value } };

}

export function rengeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (isNaN(value)) return { rengeMustBeNumber: { value } };
    if (value < minValue) return { rengeMinValue: { value } };
    if (value > maxValue) return { rengeMaxValue: { value } };

    return null;
  };
}

export function promiseUrlValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  const value = control.value;
  const urlRegexp: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const result: boolean = urlRegexp.test(value);

  return new Promise<ValidationErrors | null>((resolve): void => {
    setTimeout((): void => {
      if (result) {
        resolve(null);
      } else {
        resolve({ urlNotAllowed: { value } });
      }
    }, 1000);
  });
}

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const value = control.value;
  const urlRegexp: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const result: boolean = urlRegexp.test(value);

  return of(result)
    .pipe(map(res => res ? null : { urlNotAllowed: { value } }))
    .pipe(delay(5000));
}