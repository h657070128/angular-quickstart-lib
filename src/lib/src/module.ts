import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';

import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forRoot()
  ],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule { }
