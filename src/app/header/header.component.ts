import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NAV_LINKS } from './header.constants';

@Component({
  selector: 'vg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isFullMenuOpen = false;
  public readonly navLinks = NAV_LINKS;

  public onMenuOpen(): void {
    this.isFullMenuOpen = true;
  }

  public onMenClose(): void {
    this.isFullMenuOpen = false;
  }
}
