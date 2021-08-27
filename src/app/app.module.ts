import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './snow-fox/about/about.component';
import { HomeComponent } from './snow-fox/home/home.component';
import { OurServicesComponent } from './snow-fox/our-services/our-services.component';
import { TestimonialsComponent } from './snow-fox/testimonials/testimonials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ApplyModalComponent } from './snow-fox/apply-modal/apply-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurServicesComponent,
    AboutComponent,
    TestimonialsComponent,

  ],
  entryComponents:[ApplyModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,   
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      toastClass: 'toast toast-bootstrap-compatibility-fix'
    }),
    // MatDialogModule,
    // matDialogAnimations
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
