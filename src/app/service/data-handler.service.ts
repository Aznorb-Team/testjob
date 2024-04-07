import { Injectable } from '@angular/core';
import { IReminder } from '../models/reminder';
import { IStatus } from '../models/status';
import { reminder as data_reminder } from '../data/reminder';
import { status } from '../data/status';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  reminderSubject = new Subject<IReminder[]>();

  constructor() {

  }
  //Обновление данных
  fillReminder() {
    this.reminderSubject.next(data_reminder);
  }
  //Получение данных о статусах
  getStatus(): IStatus[] {
    return status;
  }
}
