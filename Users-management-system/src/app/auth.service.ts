import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth :boolean = false;
  isAuthenticated(){
    let local = localStorage.getItem('isLogged');

    if(local == 'true'){
      return true;
    }else{
      return false;
    }
  }
  
  login(){
    this.isAuth = true;
  }
  logOut(){
    this.isAuth = false;

  }




}
