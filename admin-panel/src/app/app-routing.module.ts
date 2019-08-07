import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';



const routes: Routes = [
  { path: '', component: DashBoardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service-provider', component: ServiceProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
