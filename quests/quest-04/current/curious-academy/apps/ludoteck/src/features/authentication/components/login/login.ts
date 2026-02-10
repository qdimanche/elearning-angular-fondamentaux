import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticateUser } from '../../models/authenticate.user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user: AuthenticateUser = {
    nickName: '',
    password: ''
  }

  form = viewChild<NgForm>('loginForm');

  save(): void {
    console.info(this.user);
    console.info(this.form()?.form.valid);
    console.info(this.form()?.controls['nickName'].errors);
    console.info(this.form()?.controls['password'].errors);
  }
}
