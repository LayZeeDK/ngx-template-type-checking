import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-counter',
  styles: [':host { display: block; }'],
  template: `<button (click)="onIncrement()">+</button>
    <button (click)="onDecrement()">-</button>
    {{ count }}`,
})
export class CounterComponent {
  @Input()
  count = 0;
  @Output()
  countChange = new EventEmitter<number>();

  onDecrement(): void {
    this.count += 1;
    this.countChange.emit(this.count);
  }

  onIncrement(): void {
    this.count -= 1;
    this.countChange.emit(this.count);
  }
}

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterScam {}
