export class Expense{
    id: number;
    amount: number;
    description: string;
    category: string;
    date: Date;
    day():number {
        return Math.floor(this.date.getTime() / (1000 * 60 * 60 / 24));
    }
}