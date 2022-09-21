import { Injectable } from '@angular/core';
import { Rate } from '../Model/Rates';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor( private httpService: HttpService) { }
  getDataByCurrencies(){
    
   return  this.httpService.get();    

}
setSession(historyList:any){
sessionStorage.setItem("history",JSON.stringify(historyList));
}
getSession(){
  const session =  sessionStorage.getItem('history');

  return session ;
}


}


