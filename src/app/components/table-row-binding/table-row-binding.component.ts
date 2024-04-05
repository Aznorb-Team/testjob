import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent
} from '@angular/material/dialog';
import { IReminder } from '../../models/reminder';
import { IStatus } from '../../models/status';
import { reminder as reminder_data} from '../../data/reminder';
import { status as status_data } from '../../data/status'; 
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table-row-binding',
  templateUrl: './table-row-binding.component.html',
  styleUrl: './table-row-binding.component.css'
})
export class TableRowBindingComponent {
  displayedColumns: string[] = ['status', 'short_description', 'data_created', 'data_completed'];
  displayedColumnsStatus: string[] = ['id', 'title'];
  dataSource: IReminder[] = reminder_data;
  dataSourceStatus: IStatus[] = status_data;
  clickedRows = new Set<IReminder>();
  clickedRowsStatus = new Set<IStatus>();

  openDialog(id:string){
    console.log(id);
  }

  // dataSource = ELEMENT_DATA;
  //clickedRows = new Set<PeriodicElement>();
}

