import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavLink } from 'src/app/shared/models/nav-link.model';
import { DEV_ENVIRONMENTS } from './home-dev-environments.constants';

@Component({
  selector: 'vg-home-dev-environment',
  templateUrl: './home-dev-environment.component.html',
  styleUrls: ['./home-dev-environment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDevEnvironmentComponent {
  public readonly environments: NavLink[] = DEV_ENVIRONMENTS;
}
