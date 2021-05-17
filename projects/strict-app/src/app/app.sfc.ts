import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  ButtonScam,
  CounterScam,
  MessageFormScam,
  ReadonlyCounterScam,
  User,
  UserListScam,
  UserScam,
} from '@workspace/shared';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `<app-counter count="1"></app-counter>
    <app-readonly-counter
      [count]="1"
      (countChange)="onCountChange($event)"
    ></app-readonly-counter>
    <app-user-list [users]="users$ | async"></app-user-list>
    <app-user [user]="{ address: {}, name: 'Lars' }"></app-user>
    <app-message-form [message]="2021"></app-message-form>
    <app-button [text]="buttonText$ | async"></app-button>`,
})
export class AppComponent {
  #count: string = '0';

  buttonText$ = of('Touch me');
  users$: Observable<readonly User[]> = of([
    {
      address: {
        city: 'Montevideo',
      },
      name: 'Nacho',
    },
    {
      address: {
        city: 'Pune',
      },
      name: 'Santosh',
    },
    {
      address: {
        city: 'Hamburg',
      },
      name: 'Serkan',
    },
  ]);

  onCountChange(count: string): void {
    this.#count = count;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    ButtonScam,
    CounterScam,
    MessageFormScam,
    ReadonlyCounterScam,
    UserListScam,
    UserScam,
  ],
})
export class AppScam {}
