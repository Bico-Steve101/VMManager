import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css',
  imports: [RouterLink],
  template: `
  <a class="btn btn-link p-0 text-body" [routerLink]="['/sign-in']">,
  <a class="dropdown-item"  [routerLink]="['/admin-overview']">Admin-Overview</a>,
  <a class="lh-1 text-body-tertiary fw-semibold fs-9" [routerLink]="['/admin-overview']">Admin-Overview</a>
`
})
export class ManageUsersComponent {

}
