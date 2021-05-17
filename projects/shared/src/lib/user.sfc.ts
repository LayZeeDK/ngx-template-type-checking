import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

import { MapScam } from './map.sfc';
import { User } from './user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user',
  styles: [':host { display: block; }'],
  template: `<app-map [city]="user?.address?.city ?? null"></app-map>
    <p>Name: {{ trim(user?.name) }}</p>`,
})
export class UserComponent {
  @Input()
  user: User | null = null;

  trim(text: string): string {
    return text.trim();
  }
}

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [MapScam],
})
export class UserScam {}
