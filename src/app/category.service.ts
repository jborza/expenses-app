import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
    getCategories(): Promise<string[]> {
        const categories = ['Car', 'Food', 'Wardrobe', 'Home', 'Personal', 'Amusement'];
        return Promise.resolve(categories);
    }
}