import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(public AppComponent: AppComponent) {}

  ngOnInit(): void {

  }

  toggleDarkMode(event: Event): void {
    event.preventDefault(); // Blocks href from executing
    this.AppComponent.toggleDarkMode();
  }

}
