import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-message-form',
  styles: [':host { display: block; }'],
  template: `<input #userControl value="message" />
    <button (click)="userControl.rows = 4">4 rows</button>`,
})
export class MessageFormComponent {
  @Input()
  message = '';
}

@NgModule({
  declarations: [MessageFormComponent],
  exports: [MessageFormComponent],
})
export class MessageFormScam {}
