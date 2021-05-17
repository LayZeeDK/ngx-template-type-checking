import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  styles: [':host { display: block; }'],
  template: '<button (click)="onClick($event)">{{ text }}</button>',
})
export class ButtonComponent {
  static ngAcceptInputType_text: string | null;

  #defaultText = 'Push me';
  #text = this.#defaultText;

  @Input()
  get text(): string {
    return this.#text;
  }
  set text(value: string) {
    this.#text = value === null ? this.#defaultText : value;
  }
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonScam {}
