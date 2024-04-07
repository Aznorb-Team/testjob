import { Component, OnInit } from '@angular/core';
import { IReminder } from '../../models/reminder';
import { IStatus } from '../../models/status';
import { DataHandlerService } from '../../service/data-handler.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-table-row-binding',
  templateUrl: './table-row-binding.component.html',
  styleUrl: './table-row-binding.component.css'
})
export class TableRowBindingComponent implements OnInit {
  displayedColumns: string[] = ['status', 'short_description', 'data_created', 'data_completed'];
  displayedColumnsStatus: string[] = ['id', 'title'];
  dataSource: IReminder[];
  dataSourceStatus: IStatus[];
  clickedRows = new Set<IReminder>();
  clickedRowsStatus = new Set<IStatus>();

  constructor(private dataHandler: DataHandlerService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataHandler.reminderSubject.subscribe(reminders => this.dataSource = reminders);
    this.dataHandler.fillReminder();
    this.dataSourceStatus = this.dataHandler.getStatus();
  }

  editReminder(id: number) {
    this.router.navigate(
      ["reminder/", id]
    );
  }
}

