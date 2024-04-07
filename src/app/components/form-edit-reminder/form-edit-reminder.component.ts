import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IReminder } from '../../models/reminder';
import { DataHandlerService } from '../../service/data-handler.service';
import { IStatus } from '../../models/status';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-edit-reminder',
  templateUrl: './form-edit-reminder.component.html',
  styleUrl: './form-edit-reminder.component.css'
})
export class FormEditReminderComponent implements OnInit {
  id: number;
  reminder: IReminder;
  dataReminder: IReminder[];
  dataSourceStatus: IStatus[];
  description: string;
  constructor(private activateRoute: ActivatedRoute, private dataHandler: DataHandlerService, private router: Router) {
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit() {
    //Получаение данных о напоминаниях из сервиса
    this.dataHandler.reminderSubject.subscribe({
      next: (reminders: IReminder[]) =>
        this.dataReminder = reminders
    });
    this.dataHandler.fillReminder();
    //Ищем выбранное для редактирования напоминание
    for (let i = 0; i < this.dataReminder.length; i++) {
      if (this.dataReminder[i].id == this.id)
        this.reminder = this.dataReminder[i];
    }
    //Получаем данные о статусах
    this.dataSourceStatus = this.dataHandler.getStatus();
  }
  //Функиця для перехода на таблицу с напоминаниями
  back() {
    this.router.navigate(
      ["table_reminder"]
    );
  }
}

