import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteService } from '../../../services';
import {toSignal} from '@angular/core/rxjs-interop';
import { HeroHomeAdapter } from '../../../adapters';
@Component({
  selector: 'app-hero-home',
  imports: [],
  templateUrl: './hero-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroHomeComponent {
  private siteService = inject(SiteService);
  // protected heroHome$ = toSignal(this.siteService.getHeroHomeData());
  protected heroHome$ = toSignal(this.siteService.getManyData({
    url: '/hero?populate=cover',
    adapter: HeroHomeAdapter,
  }));


}
