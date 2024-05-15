import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
//import { FirebaseAuthService } from '../../services/firebase.service';
//import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, /*public authService: AuthService*/) {}

  navigateToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

}
