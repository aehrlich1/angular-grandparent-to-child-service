import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickService {
  private action = new Subject();
  private response = new Subject();

  onClick() {
    this.action.next(1);
  }

  onAnswer() {
    this.response.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
  }

  awaitResponse() {
    this.action.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.response.next(2);
      },
    });
  }
}
