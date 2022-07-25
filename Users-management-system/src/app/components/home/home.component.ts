import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { KeyValuePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog, private toastr: ToastrService) { }
  username: string = '';
  birthDay: string = '';
  selam: string
  post = [
    { username: 'John1234', password: '1234', birthYear: 1994, id: 1 },
    { username: 'John1234', password: '12John1234', birthYear: 1994, id: 2 },
    { username: 'John1234', password: 'John1234', birthYear: 1994, id: 3 },
    { username: 'John1234', password: 'John1234', birthYear: 1994, id: 4 },
    { username: 'John1234', password: 'John1234', birthYear: 1994, id: 5 },
    { username: 'John1234', password: 'John1234', birthYear: 1994, id: 6 },
    { username: 'John1234', password: 'John1234', birthYear: 1994, id: 7 },
    { username: 'John1234', password: 'John12123131321', birthYear: 1994, id: 8 }

  ]
  displayedColumns: string[] = ['username', 'password', 'birthYear', 'action'];
  dataSource = this.post;

  //Delete Data
  deleteData(id: number) {
    var find = this.post.findIndex(x => {
      return x.id == id;
    })
    this.post.splice(find, 1);
    this.dataSource = [...this.post];
  }

  //Edit Data
  newUser: any;
  newPass: any;
  newBirth: any;
  openDialog(action: any, obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      }
    });
  }
  //Data Update!!
  updateRowData(row_obj: { id: number; username: any; password: any; }) {
    this.dataSource = this.dataSource.filter((value) => {
      console.log(value.id, "bu id")
      console.log(row_obj.username)
      if (value.id == row_obj.id) {
        value.username = row_obj.username;
        value.password = row_obj.password;
        this.toastr.success(' Data has been edited');
      }
      return true;
    });
  }
  //Toastr
  showWarning() {
    this.toastr.warning('Please Fill The Inputs');
  }
  showSuccess() {
    this.toastr.success('New Data Added');
  }
  //Add data!
  addUser: string = '';
  addPassword: string = '';
  addId: number;
  addBirthYear: number;

  addRowData() {
    if (this.username == '' && this.addPassword == '') {
      this.showWarning();
    } else {
      this.showSuccess();
      console.log(this.dataSource)
      this.dataSource.push({
        birthYear: this.addBirthYear,
        id: this.addId,
        username: this.addUser,
        password: this.addPassword
      })
      this.dataSource = [...this.dataSource]
    }
  }
  ngOnInit() { }
}
