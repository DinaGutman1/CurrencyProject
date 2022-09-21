export class History {
    amount?: number
    from?: string
    to?: string
    calculate?: number

    constructor(amount?: number, from?: string, to?: string, calculate?: number) {
        this.amount = amount;
        this.from=from;
        this.to=to;
        this.calculate=calculate;
    }
}