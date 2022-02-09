import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TECH_STACKS } from './home-tech.constants';

@Component({
  selector: 'vg-home-tech',
  templateUrl: './home-tech.component.html',
  styleUrls: ['./home-tech.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTechComponent implements OnInit {
  public readonly techStacks = TECH_STACKS;
  constructor() { }

  ngOnInit(): void {
  }

}
