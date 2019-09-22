import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatRadioModule
  ],
  exports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
