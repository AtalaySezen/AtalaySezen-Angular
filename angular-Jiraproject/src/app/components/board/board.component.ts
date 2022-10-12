import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private dialog: MatDialog, public boardService: BoardService) { }

  ngOnInit(): void {
  }
  deleteBoard(i: number) {
    this.boardService.deleteBoard(i);
  }

  openNewBoardDialog() {
    var dialog = this.dialog.open(BoardsDialogComponent, {
      width: '500px'
    })
  }

}
