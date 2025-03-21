import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService, UserService } from '../services';

import { RouterLink } from '@angular/router';
import { User } from '../models';
import { routesConfig } from '../config';

@Component({
  selector: 'me-page',
  imports: [RouterLink],
  template: `
    <div class="h-full flex justify-center items-center flex-col gap-4">
      @defer (when user$()) {
      <div class="hero bg-base-200 min-h-screen w-full">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-5xl font-bold">{{ user$()?.username }}</h1>
            <p class="py-6">
              email: {{ user$()?.email }}
              <br />
              created at: {{ user$()?.createdAt }}
            </p>
            <a [routerLink]="[routesConfig.edit.url]" class="btn btn-primary">Edit</a>
          </div>
        </div>
      </div>
      }
    </div>
  `,
})
export class MePage {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  routesConfig = routesConfig;
  protected user$ = toSignal(
    this.authService.me(this.userService.getUser() as User)
  );
}
