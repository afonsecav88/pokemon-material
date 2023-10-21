import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    NotFoundPageComponent,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    NotFoundPageComponent,
  ],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
