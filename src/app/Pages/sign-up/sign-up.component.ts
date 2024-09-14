import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  imports: [RouterLink],
  template: `
  <a class="fs-9 fw-bold"  [routerLink]="['/sign-up']">Create an account</a>,
  <a class="fs-9 fw-semibold" [routerLink]="['/forgot-password']">Forgot Password?</a>
`
})
export class SignUpComponent {

}
