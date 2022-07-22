import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private http: HttpClient,public dialog: MatDialog) { }
  username: string = '';
  password: string = '';
  birthDay: string = '';
  selam: string
  post = [
    { username: 'John1234', password: '1234', birthYear: 1994,id:1 },
    { username: 'John1234', password: 'John1234', birthYear: 1994,id:2  },
    { username: 'John1234', password: 'John1234', birthYear: 1994,id:3 },
    { username: 'John1234', password: 'John1234', birthYear: 1994,id:4 },
    { username: 'John1234', password: 'John1234', birthYear: 1994,id:5 },
    { username: 'John1234', password: 'John1234', birthYear: 1994,id:6 },
    { username: 'John1234', password: 'John1234', birthYear: 1994,id:7 }
  ]

  displayedColumns: string[] = ['username', 'password', 'birthYear', 'action'];
  dataSource = this.post;
  
  deleteData(id:number){
    var find = this.post.findIndex(x=>{
      return x.id== id;
    })
    this.post.splice(find,1);
    this.dataSource = [...this.post];
  }

  filter = 'normal-body'
  none = 'none';
  newUser2:any;
  name:any;
  userEdit:any;

  editData(id:number){

  }
  openDialog(){
    
  }
  newUser: any;
  newPass: any;
  newBirth: any;
  newName() {
    this.none = 'none';
    this.filter = 'normal-body'
    this.post.forEach(user => {
      user.username = this.newUser;
    });
  }
  newPassword() {
    this.none = 'none';
    this.filter = 'normal-body'
    this.post.forEach(user => {
      user.password = this.newPass;
    });
  }
  newBirthYear() {
    this.none = 'none';
    this.filter = 'normal-body'
    this.post.forEach(user => {
      user.birthYear= this.newBirth;
    });
  }
  ngOnInit() {}}
