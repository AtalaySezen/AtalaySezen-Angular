import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent,title:'Harcamalar'},
  {path:'invests',component:InvestmentsComponent,title:'Yatırımlar'},
  {path:'settings',component:SettingsComponent,title:'Ayarlar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
