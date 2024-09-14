import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  imports: [RouterLink],
  template: `
  <a class="btn btn-link p-0 text-body" [routerLink]="['/sign-in']">,
  <a class="dropdown-item"  [routerLink]="['/admin-overview']">Admin-Overview</a>,
  <a class="lh-1 text-body-tertiary fw-semibold fs-9" [routerLink]="['/admin-overview']">Admin-Overview</a>
`
})
export class UserDetailsComponent {

}
