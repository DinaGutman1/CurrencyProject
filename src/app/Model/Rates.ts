 export class Rate {
    currencyName?:string;
    value?:number;
   
    constructor( currencyName: string,
        value?: any) {
            this.currencyName = currencyName;
            this.value = value;

    }
}