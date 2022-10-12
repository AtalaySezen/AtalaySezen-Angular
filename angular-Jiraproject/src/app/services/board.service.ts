import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];

  constructor() {
    let str = localStorage.getItem('boards');
    if (str != null) {
      this.boards = JSON.parse(str);
    }
  }

  public createBoard(title: any) {
    let newBoardObject = {
      title: title,
      cards: []
    };

    this.boards.push(newBoardObject);
    localStorage.setItem('boards', JSON.stringify(this.boards));
    console.log(this.boards);
  }

  public deleteBoard(boardNumber: number) {
    this.boards.splice(boardNumber, 1);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }




}
