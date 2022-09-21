import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/Model/History';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  historyListFromSession: any;
  historyList: History[] = [];
  displayedColumns: string[] = ['amount', 'from', 'to', 'calculate'];
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {

    if (this.currencyService.getSession())
      this.historyListFromSession = this.currencyService.getSession();
    this.fillList();
  }


  fillList() {
    this.historyListFromSession = JSON.parse(this.historyListFromSession);
    for (let key in this.historyListFromSession) {
      let historyElement = new History();
      historyElement.amount = this.historyListFromSession[key]['amount'];
      historyElement.from = this.historyListFromSession[key]['from'];
      historyElement.to = this.historyListFromSession[key]['to'];
      historyElement.calculate = this.historyListFromSession[key]['calculate'];
      this.historyList.push(historyElement)
    }
  }

}


