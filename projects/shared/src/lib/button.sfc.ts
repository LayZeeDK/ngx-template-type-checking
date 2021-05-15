import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  styles: [':host { display: block; }'],
  template: '<button>Button #{{ buttonNumber }}: {{ text }}</button>',
})
export class ButtonComponent {
  @Input()
  buttonNumber = 0;
  @Input()
  text = 'Push me';
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonScam {}
