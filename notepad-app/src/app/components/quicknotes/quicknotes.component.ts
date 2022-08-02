import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {
  constructor() {
  }
  title: any;
  not: any;
  newTitle: string;
  newNote: string;
  date = new Date();
  searchValue: any;

  quickNotes = [
    { title: 'note-1', not: 'Learning Angular', date: '2022' },
    { title: 'note-2', not: 'Learning typescript', date: '2021' },
    { title: 'note-3', not: 'Typescript make everything much more clear', date: '2020' }
  ];
  addNewNote(title: string, not: string, date: any) {
    title = this.newTitle;
    not = this.newNote
    this.quickNotes.unshift({
      title,
      not,
      date
    })
    this.newNote = '';
    this.newTitle = '';
  }
  deleteNote() {
    this.quickNotes.pop();
  }


  ngOnInit(): void {
  }

}
