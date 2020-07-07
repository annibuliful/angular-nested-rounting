import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SubOneComponent } from './sub-one/sub-one.component';
import { SubTwoComponent } from './sub-two/sub-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubOneComponent,
    SubTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
