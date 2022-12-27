import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-expenseeditdialog',
  templateUrl: './expenseeditdialog.component.html',
  styleUrls: ['./expenseeditdialog.component.scss']
})
export class ExpenseeditdialogComponent {
  Form: any;

  constructor(
    public dialogRef: MatDialogRef<ExpenseeditdialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private snack: MatSnackBar
  ) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        expense_name: new FormControl(this.data.expense_name, Validators.required),
        amount: new FormControl(this.data.amount, Validators.required),
        date: new FormControl(this.data.date, Validators.required)
      })
    }
  };

  saveDialog() {
    let id = this.Form.get('id')?.value;
    let expense_name = this.Form.get('expense_name')?.value;
    let amount = this.Form.get('amount')?.value;
    let date = this.Form.get('date')?.value;
    this.http.put<any>(`http://localhost:3000/expenses/${id}`, {
      id: id,
      expense_name: expense_name,
      amount: amount,
      date: date
    }).subscribe(data => {
      if (data) {
        this.dialogRef.close({ event: 'success' });
        this.snack.open('Başarıyla Eklendi', 'Ok', {
        });
      } else {
        this.snack.open('Eklenemedi Hata Var', 'Ok', {
        });
      }
    })
  };


  closeDialog() {
    this.dialogRef.close();
  }







}
