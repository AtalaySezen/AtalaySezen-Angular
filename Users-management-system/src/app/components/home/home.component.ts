import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) { }
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

  deleteData(id: number) {
    var find = this.post.findIndex(x => {
      return x.id == id;
    })
    this.post.splice(find, 1);
    this.dataSource = [...this.post];
  }
  filter = 'normal-body'
  none = 'none';
  newUser2: any;
  name: any;
  userEdit: any;

  //Edit Data
  eventTarget(event: any) {
    this.post.forEach(posts => {
      if (event === posts) {
        posts.username = this.newUser2
      }
    })
    this.none = 'show';
  }
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
  updateRowData(row_obj: { id: number; name: any; pass: any; }) {
    this.dataSource = this.dataSource.filter((value) => {
      console.log(value.id, "bu id")
      console.log(row_obj.name)
      if (value.id == row_obj.id) {
        value.username = row_obj.name;
        value.password = row_obj.pass;
        alert("edited");
      }
      return true;
    });
  }
  
  addUser: string = '';
  addPassword: string = '';
  addId: number;
  addBirthYear: number;
  addRowData() {
    let counter = 9;
    console.log(counter)
    if (this.username==''&&this.addPassword=='') {
      alert("doldur")
    } else {
      ++counter;
      console.log(counter)
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
