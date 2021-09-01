import { ApplyModalComponent } from './../apply-modal/apply-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  openDialog(){
    this.dialog.open(ApplyModalComponent,{height:'550px',width:'500px'});
  }





  ngOnInit(): void {
  }

}
