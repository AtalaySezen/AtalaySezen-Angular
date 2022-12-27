import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deleteincome',
  templateUrl: './deleteincome.component.html',
  styleUrls: ['./deleteincome.component.scss']
})
export class DeleteincomeComponent {
  Form: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteincomeComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private snack: MatSnackBar
  ) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required)
      })
    }
  }


  saveDialog() {
    let id = this.Form.get('id')?.value;
    this.http.delete(`http://localhost:3000/incomes/${id}`).subscribe(() => {
      this.dialogRef.close({ event: 'success' });
      this.snack.open('Başarıyla Silindi', 'Ok', {
      });
    })

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
