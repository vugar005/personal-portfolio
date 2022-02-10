import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Career, CAREERS } from './home-career.constants';

@Component({
  selector: 'vg-home-career',
  templateUrl: './home-career.component.html',
  styleUrls: ['./home-career.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCareerComponent {
  public readonly careers: Career[] = CAREERS;
}
