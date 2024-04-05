import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';

export const routes: Routes = [
    { path: "", component: AppComponent},
    { path: "reminder/edit/:reminder", component: DialogOverviewComponent}
];
