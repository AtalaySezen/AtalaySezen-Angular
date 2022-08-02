import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuicknotesComponent } from './components/quicknotes/quicknotes.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path:'notes',component:QuicknotesComponent,title:'Notes'},
  {path:'settings',component:SettingsComponent,title:'Settings'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
