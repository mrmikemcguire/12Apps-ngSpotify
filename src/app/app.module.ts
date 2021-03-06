import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'; //added at the suggestion
                                                                          //of StackOverflow

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
      AppComponent,
      SearchComponent,
      NavbarComponent,
      AboutComponent,
      ArtistComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}], //added at the suggestion
                                                                             //of StackOverflow
  bootstrap: [AppComponent]
})
export class AppModule { }

