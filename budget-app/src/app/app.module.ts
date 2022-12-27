import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { InvestmentsComponent } from './components/investments/investments.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { HomeeditdialogComponent } from './components/home/homeeditdialog/homeeditdialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SettingsComponent } from './components/settings/settings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ExpenseeditdialogComponent } from './components/home/expenseeditdialog/expenseeditdialog.component';
import { DeleteComponent } from './components/home/delete/delete.component';
import { DeleteincomeComponent } from './components/home/deleteincome/deleteincome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    LoadingComponent,
    InvestmentsComponent,
    HomeeditdialogComponent,
    SettingsComponent,
    ExpenseeditdialogComponent,
    DeleteComponent,
    DeleteincomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
  { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
