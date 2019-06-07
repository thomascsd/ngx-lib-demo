import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedCompModule } from 'shared-comp';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LinksComponent],
  imports: [
    BrowserModule,
    SharedCompModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'links', component: LinksComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
