import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NavLink } from 'src/app/shared/models/nav-link.model';

@Component({
  selector: 'vg-header-full-nav',
  templateUrl: './header-full-nav.component.html',
  styleUrls: ['./header-full-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderFullNavComponent {
  @Output() readonly closeMenu = new EventEmitter<void>();
  @Input() navLinks?: NavLink[];

  public onClose(): void {
    this.closeMenu.next();
  }
}
