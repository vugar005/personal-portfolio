import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../header.models';

@Component({
  selector: 'vg-header-full-nav',
  templateUrl: './header-full-nav.component.html',
  styleUrls: ['./header-full-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderFullNavComponent {
  @Output() readonly close = new EventEmitter<void>();
  @Input() navLinks?: NavLink[];
  constructor() { }

  public onClose(): void {
    this.close.next();
  }

}
