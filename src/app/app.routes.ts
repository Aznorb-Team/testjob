import { FormEditReminderComponent } from './components/form-edit-reminder/form-edit-reminder.component';
import { TableRowBindingComponent } from './components/table-row-binding/table-row-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", redirectTo: 'table_reminder', pathMatch: 'full' },
    { path: "table_reminder", component: TableRowBindingComponent },
    { path: "reminder/:id", component: FormEditReminderComponent }
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRouting { }