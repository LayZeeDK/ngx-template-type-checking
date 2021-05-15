import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@workspace/shared';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-list',
  styles: [':host { display: block; }'],
  template: `<a *ngFor="let user of users" routerLink="/user/{{ user.id }}">
    {{ user.name }}
  </a>`,
})
export class UserListComponent<TUser extends User> {
  @Input()
  users: readonly TUser[] = [];
}

@NgModule({
  declarations: [UserListComponent],
  exports: [UserListComponent],
  imports: [CommonModule, RouterModule],
})
export class UserListScam {}
