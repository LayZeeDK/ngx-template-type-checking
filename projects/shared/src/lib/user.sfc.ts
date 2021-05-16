import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

import { MapScam } from './map.sfc';
import { User } from './user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user',
  styles: [':host { display: block; }'],
  template: '<app-map [city]="user?.address?.city ?? null"></app-map>',
})
export class UserComponent {
  @Input()
  user: User | null = null;
}

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [MapScam],
})
export class UserScam {}
