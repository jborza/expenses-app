export class Expense{
    public constructor(id,amount,description,category,date) {
        this.id = id;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.date = date;
    }
    id: number;
    amount: number;
    description: string;
    category: string;
    date: Date;
    day():number {
        return Math.floor(this.date.getTime() / (1000 * 60 * 60 / 24));
    }

    dateIso(): string {
        return this.date.toISOString().slice(0, 10);
    }

    dateWithoutTime(): Date {
        var d = new Date(this.date);
        d.setHours(0, 0, 0, 0);
        return d;
    }
}