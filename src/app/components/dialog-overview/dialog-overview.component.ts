import {Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { IReminder } from '../../models/reminder';
import { reminder as reminder_data } from '../../data/reminder';
import { status as status_data } from '../../data/status'; 
import { IStatus } from '../../models/status';
import { RouterOutlet, RouterLink, Router} from "@angular/router";

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrl: './dialog-overview.component.css'
})
export class DialogOverviewComponent {
  @Input() reminder: IReminder;
  
  constructor(public dialog: MatDialog) {}

  openDialog(reminder: IReminder) {
    this.dialog.open(DialogOverviewDialog, {
      data: reminder,
    });
  }
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './dialog-overview-dialog.component.html',
  styleUrl: './dialog-overview.component.css'
})
export class DialogOverviewDialog {
  @Input() reminder: IReminder;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IReminder,
  ) {
    this.reminder = data;
  }

  dataSourceStatus: IStatus[] = status_data;
  statusSelected = 1;
  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  }
}
