import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CovertCurrencyBoardComponent } from './components/covert-currency-board/covert-currency-board.component';

const routes: Routes = [

  {path:'currency-converter', component :CovertCurrencyBoardComponent},
   {path:'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
