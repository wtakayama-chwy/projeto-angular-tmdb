import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.css']
})
export class MoviePopupComponent implements OnInit {
  
  @Input() movieObject: Movie;

  constructor(
    public apiService: ApiService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<MoviePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
  
  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
