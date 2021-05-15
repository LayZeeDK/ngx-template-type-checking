import { Component, NgModule } from '@angular/core';
import { CounterScam, MessageFormScam, UserListScam } from '@workspace/shared';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `<app-counter count="1"></app-counter>
    <app-user-list></app-user-list>
    <app-message-form></app-message-form>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [CounterScam, MessageFormScam, UserListScam],
})
export class AppScam {}
