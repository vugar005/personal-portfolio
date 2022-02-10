import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HOME_INTRO } from './home-intro.constants';

@Component({
  selector: 'vg-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeIntroComponent implements OnInit {
  public readonly homeIntro = HOME_INTRO;
  constructor() { }

  ngOnInit(): void {
  }

}
