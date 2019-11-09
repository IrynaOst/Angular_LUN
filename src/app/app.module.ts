import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ConvertCurencyPipe } from './pipes/convert-curency.pipe';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateHouseComponent } from './components/create-house/create-house.component';
import { ShowHousesComponent } from './components/show-houses/show-houses.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertCurencyPipe,
    CreateUserComponent,
    CreateHouseComponent,
    ShowHousesComponent,
    AuthUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
