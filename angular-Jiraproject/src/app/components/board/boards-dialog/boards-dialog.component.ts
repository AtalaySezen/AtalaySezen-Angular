import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent implements OnInit {


  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })

  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>, private boardService: BoardService) { }

  ngOnInit(): void {
  }

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value)
  }

  close() {
    this.dialogRef.close();
  }

}
