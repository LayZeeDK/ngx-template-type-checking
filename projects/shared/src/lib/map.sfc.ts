import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-map',
  styles: [':host { display: block; }'],
  template: 'Map of {{ city }}',
})
export class MapComponent {
  @Input()
  city = '';
}

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
})
export class MapScam {}
