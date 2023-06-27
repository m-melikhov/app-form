import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { AbstractControl, FormGroup, NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  roles: string[] = ['Гість', 'Модератор', 'Адміністаротор'];
  user: User = new User(0, null, null, null);

  formErrors: any = {
    name: '',
    age: ''
  };

  validationMessages: any = {
    name: {
      required: 'Ім\ʼя обов\ʼязкове',
      minlength: 'Ім\ʼя повинно бути мінімум 4 символи'
    },
    age: {
      required: 'Вік обов\ʼязковий',
    }
  };

  @ViewChild('userForm') userForm!: NgForm;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.userForm.valueChanges?.subscribe(() => this.onValueChanged());
  }

  onSubmit(formValue: any): void {
    console.log('Form Submitted');
    console.log(formValue);
  }

  private onValueChanged(): void {
    const form = this.userForm.form

    Object.keys(this.formErrors).forEach(fieldName => {
      const control = form.get(fieldName)

      this.formErrors[fieldName] = '';

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[fieldName];


        Object.keys(control.errors as ValidationErrors).forEach(key => {
          console.log(messages[key]);
          this.formErrors[fieldName] += messages[key] + ' ';
        });
      }
    });
  }

}
