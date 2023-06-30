import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componnents/login/login.component';
import { DashboardComponent } from './componnents/dashboard/dashboard.component';
import { HomeComponent } from './componnents/home/home.component';

const routes: Routes = [
  
  // {path: '',
  //   children: [
  //     {
  //       path: 'default',
  //       component: DashboardComponent,
  //       data: {
  //         title: "Dashboard",
  //         breadcrumb: "Dashboard"
  //       }
  //     }]},
  { path:'',component:HomeComponent,pathMatch:'full'},
  { path:'home',component:HomeComponent,},

  { path:'login',component:LoginComponent,},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
