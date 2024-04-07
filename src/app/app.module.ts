import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { TableRowBindingComponent } from './components/table-row-binding/table-row-binding.component';
import { FormEditReminderComponent } from './components/form-edit-reminder/form-edit-reminder.component';
import { CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { RouterOutlet, RouterLink } from "@angular/router";
import { DataHandlerService } from './service/data-handler.service';

@NgModule({
    imports: [
        FormsModule,
        MatTableModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatGridListModule,
        MatSelectModule,
        MatDatepickerModule,
        DatePipe,
        RouterOutlet,
        RouterLink,
    ],
    declarations: [
        TableRowBindingComponent,
        FormEditReminderComponent
    ],
    bootstrap: [],
    exports: [
        TableRowBindingComponent,
        FormEditReminderComponent
    ],
    providers: [
        provideNativeDateAdapter(),
        DataHandlerService
    ]
})

export class AppModule {
    
 }