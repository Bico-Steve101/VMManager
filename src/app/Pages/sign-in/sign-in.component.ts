import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  imports: [RouterLink],
  template: `
  <a class="fs-9 fw-bold"  [routerLink]="['/sign-up']">Create an account</a>,
  <a class="fs-9 fw-semibold" [routerLink]="['/forgot-password']">Forgot Password?</a>
`
})
export class SignInComponent {

}
