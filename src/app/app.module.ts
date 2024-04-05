import { NgModule }      from "@angular/core";
import { FormsModule }   from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { TableRowBindingComponent } from './components/table-row-binding/table-row-binding.component';
import { CommonModule } from '@angular/common'; 
import { DialogOverviewComponent, DialogOverviewDialog } from "./components/dialog-overview/dialog-overview.component";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
    imports:[ 
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
    ],
    declarations:[ 
        TableRowBindingComponent,
        DialogOverviewComponent,
        DialogOverviewDialog
    ],
    bootstrap:    [  ],
    exports:[
        TableRowBindingComponent, 
        DialogOverviewComponent,
        DialogOverviewDialog
    ],
    providers: [
        provideNativeDateAdapter()
    ]
})
export class AppModule { }