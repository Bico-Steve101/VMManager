import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-out',
  standalone: true,
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css',
  imports: [RouterLink],
  template: `
  <a class="btn btn-primary" [routerLink]="['/sign-in']"><span class="fas fa-angle-left me-2"></span>Go to sign in page</a>,
  <a class="fs-9 fw-semibold" [routerLink]="['/forgot-password']">Forgot Password?</a>
`
})
export class SignOutComponent {

}
