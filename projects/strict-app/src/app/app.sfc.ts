import { Component, NgModule } from '@angular/core';
import { CounterScam, UserListScam } from '@workspace/shared';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `<app-counter count="1"></app-counter>
    <app-user-list></app-user-list>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [CounterScam, UserListScam],
})
export class AppScam {}
