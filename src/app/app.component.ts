// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // to inject itself into the main route html in index.html
  templateUrl: './app.component.html', // to load the specified html
  styleUrls: ['./app.component.scss'], // to load the specified css
  standalone: true  // To allow modularity in Angular v17 when doing certain operations
})
export class AppComponent {

  signIn(): void {
    console.log('Sign in button clicked');
    // Add your sign-in logic here
  }
}

