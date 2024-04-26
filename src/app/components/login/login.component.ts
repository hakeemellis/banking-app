import { Component } from '@angular/core';
import {Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  navigateToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

}
