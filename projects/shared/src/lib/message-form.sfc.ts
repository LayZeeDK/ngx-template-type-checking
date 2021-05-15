import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-message-form',
  styles: [':host { display: block; }'],
  template: `<input #userControl />
    <button (click)="userControl.rows = 4">4 rows</button>`,
})
export class MessageFormComponent {}

@NgModule({
  declarations: [MessageFormComponent],
  exports: [MessageFormComponent],
})
export class MessageFormScam {}
