import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root',
})
export class RecepiesService {
  recepiesChanged = new Subject<boolean>();

  recepies: Recepie[] = [
    new Recepie(
      'r1',
      'Burger',
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
      ['Tomato', 'Meat', 'Chees']
    ),
    new Recepie(
      'r2',
      'Twister',
      // eslint-disable-next-line max-len
      'http://storage.eu.content-cdn.io/cdn-cgi/image/width=300,quality=75,format=auto,fit=cover,g=top/am-resources/c08fc9ba-a4c9-40a2-a8d5-b2ba844c5690/Images/ProductImages/Source/lebanese%20twister%20sandwich.png',
      ['Chicken', 'Salad', 'Chees']
    ),
  ];

  constructor() {}

  getAllRecepies() {
    return [...this.recepies];
  }

  getRecepieById(recepieId: string) {
    return { ...this.recepies.find((recepie) => recepie.id === recepieId) };
  }

  deleteRecepie(id: string) {
    this.recepies = this.recepies.filter((rec) => rec.id !== id);
    this.recepiesChanged.next(true);
  }
}
