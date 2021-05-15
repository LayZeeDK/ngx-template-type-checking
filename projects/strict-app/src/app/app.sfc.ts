import { Component, Input, NgModule } from '@angular/core';
import { ButtonScam } from '@workspace/shared';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `<app-button buttonNumber="3" [text]="'Strict mode'"></app-button>`,
})
export class AppComponent {
  @Input()
  buttonNumber = 0;
  @Input()
  text = 'Push me';
}

@NgModule({
  declarations: [AppComponent],
  imports: [ButtonScam],
})
export class AppScam {}
