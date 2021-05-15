import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { MapScam } from './map.sfc';
import { User } from './user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user',
  styles: [':host { display: block; }'],
  template: '<app-map [city]="user.address.city"></app-map>',
})
export class UserComponent {
  user: User = {
    address: {
      city: 'Pune',
    },
    name: 'Santosh',
  };
}

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [MapScam],
})
export class UserScam {}
