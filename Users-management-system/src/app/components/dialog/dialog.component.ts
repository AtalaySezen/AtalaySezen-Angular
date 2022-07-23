//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  action: string;
  local_data: any;
  password: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
    console.log(this.local_data.name, "bu inputtan gelen")
  }
  
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
    alert("kapatıldı")

  }

}
