import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatRadioModule,
  MatIconModule,
  MatTableModule
 } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { HttpService } from './http.service';
import { ResultsComponent } from './results/results.component';
import { TableBasicComponent } from './table-basic/table-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    ResultsComponent,
    TableBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, HttpService],
  bootstrap: [AppComponent]
  // exports: [
  //   MatButtonModule,
  //   MatCheckboxModule,
  //   MatToolbarModule,
  //   MatInputModule,
  //   MatCardModule,
  //   MatListModule,
  //   MatRadioModule,
  //   MatIconModule
  // ]
})
export class AppModule { }
