import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderFullNavComponent } from './header/header-full-nav/header-full-nav.component';
import { MaskBackgroundDirectiveModule } from './shared/directives/mask-background/mask-background.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderFullNavComponent],
  imports: [BrowserModule, AppRoutingModule, MaskBackgroundDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
