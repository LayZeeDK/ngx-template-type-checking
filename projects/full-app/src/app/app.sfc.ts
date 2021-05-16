import { Component, NgModule } from '@angular/core';
import { CounterScam, MessageFormScam, ReadonlyCounterScam, UserListScam, UserScam } from '@workspace/shared';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `<app-counter count="1"></app-counter>
    <app-readonly-counter [count]="1"></app-readonly-counter>
    <app-user-list></app-user-list>
    <app-user [user]="{ address: {}, name: 'Lars' }"></app-user>
    <app-message-form [message]="2021"></app-message-form>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CounterScam,
    MessageFormScam,
    ReadonlyCounterScam,
    UserListScam,
    UserScam,
  ],
})
export class AppScam {}
