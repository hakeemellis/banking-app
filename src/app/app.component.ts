// app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Dark Mode
  darkMode = false;

  toggleDarkMode(): void{
    this.darkMode = !this.darkMode; //this reverses the logic and makes it true

    if (this.darkMode) {
      document.documentElement.classList.add('dark'); // so if true, show the class "dark"
    }
    else{
      document.documentElement.classList.remove('dark') // if false, remove the class
    }
  }

}

