import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskBackgroundDirective } from './mask-background.directive';

@NgModule({
  declarations: [MaskBackgroundDirective],
  imports: [CommonModule],
  exports: [MaskBackgroundDirective],
})
export class MaskBackgroundDirectiveModule {}
