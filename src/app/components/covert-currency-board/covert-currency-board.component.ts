import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { History } from 'src/app/Model/History';
import { Rate } from 'src/app/Model/Rates';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-covert-currency-board',
  templateUrl: './covert-currency-board.component.html',
  styleUrls: ['./covert-currency-board.component.css']
})
export class CovertCurrencyBoardComponent implements OnInit {
  currencyForm: FormGroup = new FormGroup({});
  rateList: Rate[] = [];
  historyList: History[] = [];
  finallyCalculate: string = '';
  constructor(private currencyService: CurrencyService) {
    this.createForm();

  }
  createForm() {
    this.currencyForm = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {

    this.currencyService.getDataByCurrencies().subscribe(data => {
      this.rateList = Object.entries(data.conversion_rates).map(([name, obj]) => (new Rate(name, obj)));
    }, (error) => {
      console.log('error in API '+ error);
    });;

    this.currencyForm.controls['from'].valueChanges.subscribe(item => {
      if (this.validForm())
        this.calculateConverterCurrency(item, this.currencyForm.controls['to'].value);
    });
    this.currencyForm.controls['to'].valueChanges.subscribe(item => {
      if (this.validForm())
        this.calculateConverterCurrency(this.currencyForm.controls['from'].value, item);
    });

  }
  calculateConverterCurrency(from: any, to: any) {
    let calculateCurrency = (to.value / from.value) * this.currencyForm.controls['amount'].value;
    this.historyList.push(new History(this.currencyForm.controls['amount'].value, from.currencyName,
      to.currencyName, calculateCurrency));
    this.currencyService.setSession(this.historyList);

    this.finallyCalculate = this.currencyForm.controls['amount'].value + " " +
      from.currencyName + " = " + calculateCurrency + " " + to.currencyName;
  }
  onAmountChange() {
    if (this.validForm())
      this.calculateConverterCurrency(this.currencyForm.controls['from'].value, this.currencyForm.controls['to'].value);
  }

  validForm() {
    if (this.currencyForm.controls['from'].valid && this.currencyForm.controls['to'].valid
      && this.currencyForm.controls['amount'].valid)
      return true;
    return false;
  }

}
