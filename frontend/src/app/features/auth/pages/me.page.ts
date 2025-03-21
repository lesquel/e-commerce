// import { Component, inject, OnInit } from '@angular/core';
// import { AuthService, UserService } from '../services';

// import { AsyncPipe } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { ReturnPageComponent } from '../../components/return-page/return-page.component';
// import { User } from '../models';

// @Component({
//   selector: 'me-page',
//   imports: [AsyncPipe, RouterLink, ReturnPageComponent],
//   template: `
//     <div
//       class="min-h-screen flex justify-center items-center flex-col gap-4 w-full"
//     >
//       @if ((user$ | async); as user){
//       <app-return-page [before]="'/'" />
//       <div class="hero bg-base-200 min-h-screen w-full">
//         <div class="hero-content flex-col lg:flex-row">
//           <img
//             [src]="user.avatar || 'https://picsum.photos/seed/picsum/200/300'"
//             class="max-w-sm rounded-lg shadow-2xl"
//           />
//           <div>
//             <h1 class="text-5xl font-bold">{{ user.username }}</h1>
//             <p class="py-6">
//               email: {{ user.email }}
//               <br />
//               created at: {{ user.createdAt }}
//             </p>
//             <a [routerLink]="['/auth/me/edit']" class="btn btn-primary">Edit</a>
//           </div>
//         </div>
//       </div>
//       }
//     </div>
//   `,
// })
// export class MePage {
//   private authService = inject(AuthService);
//   private userService = inject(UserService);
//   protected user$ = this.authService.me(this.userService.getUser() as User);
//   constructor() {
//     console.log('user meeeeeee', this.userService.getUser( ));
//   }
// }

import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'; 
import { AuthService, UserService } from '../services';

import { RouterLink } from '@angular/router';
import { User } from '../models';

@Component({
  selector: 'me-page',
  imports: [ RouterLink,],
  template: `
    <div
      class="h-full flex justify-center items-center flex-col gap-4"
    >
      @defer (when user$()) {
        <div class="hero bg-base-200 min-h-screen w-full">
          <div class="hero-content flex-col lg:flex-row">
            <img
            [src]="user$()?.avatar || 'https://picsum.photos/seed/picsum/200/300'"
            class="max-w-sm w-full rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-5xl font-bold">{{ user$()?.username }}</h1>
              <p class="py-6">
                email: {{ user$()?.email }}
                <br />
                created at: {{ user$()?.createdAt }}
              </p>
              <a [routerLink]="['/auth/me/edit']" class="btn btn-primary">Edit</a>
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
  protected user$ = toSignal(this.authService.me(this.userService.getUser() as User));
}
