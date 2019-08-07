import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';

import { ChartsModule } from 'ng2-charts';
import { GraphDataService } from '../app/services/admin-panel/graph-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UsersComponent,
    ServiceProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [GraphDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
