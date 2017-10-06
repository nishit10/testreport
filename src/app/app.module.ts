import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './client';

import { MenuModule, PanelModule, ChartModule,
   InputTextModule, ButtonModule, InputMaskModule,
    InputTextareaModule, EditorModule, CalendarModule,
     RadioButtonModule, FieldsetModule, DropdownModule,
      MultiSelectModule, ListboxModule, SpinnerModule,
       SliderModule, RatingModule, DataTableModule,
        ContextMenuModule, TabViewModule, DialogModule,
         StepsModule, ScheduleModule, TreeModule,
          GMapModule, DataGridModule, TooltipModule,
           ConfirmationService, ConfirmDialogModule,
            GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RouterModule, Routes } from "@angular/router";
=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> graphql
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { AlltimesComponent } from './alltimes/alltimes.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> graphql
import { FielderrorsComponent } from './fielderrors/fielderrors.component';


const appRoutes: Routes = [
<<<<<<< HEAD
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "alltimes", component: AlltimesComponent },
  { path: "timesheet", component: TimesheetComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "settings", component: SettingsComponent }
=======
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alltimes', component: AlltimesComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent }
>>>>>>> graphql
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    SettingsComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
<<<<<<< HEAD
=======
    ApolloModule.forRoot(provideClient),
>>>>>>> graphql
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
