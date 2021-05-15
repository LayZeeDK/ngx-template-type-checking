import { Component, NgModule } from '@angular/core';
import { CounterScam } from '@workspace/shared';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `<app-counter count="1"></app-counter>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [CounterScam],
})
export class AppScam {}
