import { CharCountPipe } from './charcount.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; 
import { AppComponent } from './app.component';
import { AllCompComponent } from './all-comp.component';
import { SummaryPipe } from './summary.pipe';
import { WordcountPipe } from './wordcount.pipe';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    AllCompComponent,
    SummaryPipe,
    WordcountPipe,
    CharCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
