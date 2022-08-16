import { Component, OnInit, Input, Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  lightMode = ''
  ngOnInit(): void {
    let darkMode = localStorage.getItem('darkMode');
    console.log(darkMode)
    if (darkMode === "true") {
      document.body.classList.add("dark-theme");
      this.lightMode = 'white'
    } else {
      document.body.classList.remove("dark-theme");
      this.lightMode = ''
    }
  }
  enableDarkMode() {
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "true");
    this.lightMode = 'white'
  }
  disableDarkMode() {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", "false");
    this.lightMode = ''

  }






}
AppComponent
