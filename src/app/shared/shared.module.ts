import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundPageComponent],
  exports: [HeaderComponent, FooterComponent, NotFoundPageComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
