import { ChangeDetectionStrategy, Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  styles: [':host { display: block; }'],
  template:
    '<button (click)="onClick($event)"><ng-content></ng-content></button>',
})
export class ButtonComponent {
  @Output()
  appClick = new EventEmitter<void>();

  onClick(event: InputEvent): void {
    this.appClick.emit();
  }
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonScam {}
