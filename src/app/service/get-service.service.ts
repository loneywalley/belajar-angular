import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataUser } from '../app.entity';

@Injectable({
  providedIn: 'root'
})
export class GetService{
  dataUsers! : Array<DataUser>;

  constructor() {
    // Initialize with some default data
    this.dataUsers = [{
      name: 'tttttt',
      email: 'ttttt@gmail.com',
      address: {
        zipcode: 1,
        city: 'dddddd',
        province: 'aaaaaa'
      }
    }];
  }

  createUserForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Z][a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z ]*$')]),
      province: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z ]*$')]),
      zipCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$'), Validators.minLength(5), Validators.maxLength(5)])
    });
  }

  addUser(form: FormGroup): void {
    this.dataUsers.push({
      name: form.get('name')?.value,
      email: form.get('email')?.value,
      address: {
        zipcode: form.get('zipCode')?.value,
        city: form.get('city')?.value,
        province: form.get('province')?.value,
      }
    });
  }

  getUsers(): Array<DataUser> {
    return this.dataUsers;
  }
}