import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { routing,appRoutingProviders }  from './app.routing';

import { LoginComponent }       from './login.component';

import { DialogService }        from './dialog.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    LoginComponent
  ],
   providers:[
    appRoutingProviders,
    DialogService
  ],
  bootstrap:[ AppComponent ]
})

export class AppModule { }

