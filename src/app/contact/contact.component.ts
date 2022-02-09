import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CONTACT_LIST } from './contact.constants';

@Component({
  selector: 'vg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  public readonly contacts = CONTACT_LIST;
  constructor() { }

  ngOnInit(): void {
  }

}
