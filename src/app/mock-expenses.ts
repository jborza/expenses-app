import { Expense } from './expense';

export const EXPENSES: Expense[] = [
    new Expense(1, 3.99, 'Lunch', 'Food', new Date("March 16 2017, 12:00")),
    new Expense( 2,  25,    'Fuel', 'Car', new Date("March 16 2017, 18:00") ),
    new Expense( 3,  4.99,  'Lunch', 'Food', new Date("March 17 2017, 12:00") ),
    new Expense( 4,  4.49,  'Lunch', 'Food', new Date("March 18 2017, 12:00") ),
    new Expense( 5,  4.49,  'T-shirt', 'Wardrobe',  new Date("March 18 2017, 19:27") ),
    new Expense (6,  2.00, 'Toll', 'Car',  new Date("March 18 2017, 20:27") ),
    new Expense( 7,  3.89,  'Lunch - pizza',  'Food', new Date("April 1 2017, 11:30"))
];