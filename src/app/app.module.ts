import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {router} from './router.module';
import { ListComponent } from './list/list.component';
import {HttpClientModule } from '@angular/common/http';
import { MembersComponent } from './members/members.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    MembersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    router,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
