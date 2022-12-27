import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeeditdialogComponent } from './homeeditdialog/homeeditdialog.component';
import { ExpenseeditdialogComponent } from './expenseeditdialog/expenseeditdialog.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteincomeComponent } from './deleteincome/deleteincome.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<HomeeditdialogComponent>,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getExpenses();
    this.getIncomes();
  }

  showTable: boolean = false;
  loadingTable: boolean = true;
  expensesArray: Array<any> = [];
  incomesArray: Array<any> = [];
  displayedColumns: string[] = ['number', 'expense', 'amount', 'date', 'actions'];
  dataSource: MatTableDataSource<any>;
  incomeSource: MatTableDataSource<any>;
  header: string = "Harcamalar";
  header2: string = "Gelirler";
  expenseSum: number;
  incomeSum: number;
  totalNumber: number;

  changeShow() {
    this.showTable = !this.showTable;
    if (this.showTable == true) {
      this.header = "Gelirler"
      this.header2 = "Harcamalar"
    } else {
      this.header = "Harcamalar"
      this.header2 = "Gelirler"
    }
  }

  //Get Expenses
  getExpenses() {
    this.dataService.GetExpenses().subscribe(x => {
      this.dataSource = new MatTableDataSource(x);
      this.loadingTable = false;
    })
  }

  deleteExpense(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '600px',
      height: 'auto',
      data: {
        id: id
      }
    })
    dialogRef.afterClosed().subscribe(data => {
      this.getExpenses();
    })
  }

  editExpense(id: number, expense: string, amount: number, date: any) {
    console.log(id, "id");
    console.log(expense, "expense name");
    console.log(amount, "amount");
    console.log(date, "date");
    const dialogRef = this.dialog.open(ExpenseeditdialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        id: id,
        expense_name: expense,
        amount: amount,
        date: date
      }
    })
    dialogRef.afterClosed().subscribe(data => {
      this.getExpenses();
    })

  }


  //Get Income Datas
  getIncomes() {
    this.dataService.GetIncomes().subscribe(x => {
      this.incomeSource = new MatTableDataSource(x);
      this.loadingTable = false;
    })
  }

  deleteIncome(id: number) {
    const dialogRef = this.dialog.open(DeleteincomeComponent, {
      width: '600px',
      height: 'auto',
      data: {
        id: id
      }
    })
    dialogRef.afterClosed().subscribe(data => {
      this.getIncomes();
    })
  }


  //Gelir İçin Dialog
  editItem(id: number, incomeName: string, amount: number, date: any) {
    console.log(id, "id");
    console.log(incomeName, "income name");
    console.log(amount, "amount");
    console.log(date, "date");
    const dialogRef = this.dialog.open(HomeeditdialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        id: id,
        incomeName: incomeName,
        amount: amount,
        date: date
      }
    })
    dialogRef.afterClosed().subscribe(data => {
      this.getIncomes();
    })
  }










}
