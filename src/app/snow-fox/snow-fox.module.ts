import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowFoxRoutingModule } from './snow-fox-routing.module';
import { SnowFoxComponent } from './snow-fox.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ApplyModalComponent } from './apply-modal/apply-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    SnowFoxComponent,
    HeaderComponent,
    FooterComponent,
    ApplyModalComponent
  
  ],
  entryComponents:[ApplyModalComponent],
  imports: [
    CommonModule,
    SnowFoxRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),





  ]
 
})
export class SnowFoxModule { }
