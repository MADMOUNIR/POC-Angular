import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MyModalComponent } from './modals/my-modal/my-modal.component';
import { CallModalComponent } from './modals/call-modal/call-modal.component'


@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    CallModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    MyModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
