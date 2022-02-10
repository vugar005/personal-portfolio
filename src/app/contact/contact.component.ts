import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONTACT_LIST } from './contact.constants';

@Component({
  selector: 'vg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  public readonly contacts = CONTACT_LIST;
  constructor(private title: Title) {}

  public ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.title.setTitle(`Contact Vugar`);
  }

}
