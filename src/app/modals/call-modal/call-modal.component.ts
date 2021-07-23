import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from 'src/app/modals/my-modal/my-modal.component';

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.component.html',
  styleUrls: ['./call-modal.component.css']
})
export class CallModalComponent implements OnInit {

  city: string;
  name: string;
  food_from_modal: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: { name: this.name, animal: this.city }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.city = result;
      this.food_from_modal = result.food;
    });
  }

}
