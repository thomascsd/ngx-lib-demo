import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedCompModule } from 'shared-comp';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedCompModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
