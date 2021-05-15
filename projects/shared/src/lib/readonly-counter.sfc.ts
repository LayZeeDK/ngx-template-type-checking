import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-readonly-counter',
  styles: [':host { display: block; }'],
  template: `<button (click)="onIncrement()">+</button>
    <button (click)="onDecrement()">-</button>
    {{ count }}`,
})
export class ReadonlyCounterComponent {
  @Input()
  readonly count = 0;
  @Output()
  countChange = new EventEmitter<number>();

  onDecrement(): void {
    this.countChange.emit(this.count - 1);
  }

  onIncrement(): void {
    this.countChange.emit(this.count + 1);
  }
}

@NgModule({
  declarations: [ReadonlyCounterComponent],
  exports: [ReadonlyCounterComponent],
})
export class ReadonlyCounterScam {}
