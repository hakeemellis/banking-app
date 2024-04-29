import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';

@Component({
  selector: 'app-chequing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TransactionHistoryComponent],
  templateUrl: './chequing.component.html',
  styleUrl: './chequing.component.scss'
})
export class ChequingComponent implements OnInit {

  balance: number = 0; // Have to give integer a balance to start | if balance? - it would've turned optional

  constructor() { }

  ngOnInit(): void {

    this.balance = 1000; // Balance is then defined here
  }

}
