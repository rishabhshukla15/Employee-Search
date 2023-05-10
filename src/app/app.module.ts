import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeSearchComponent } from './employee-search-component/employee-search-component.component';
import { EmployeeService } from './employee-service.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, HttpClientModule],
  declarations: [AppComponent, EmployeeSearchComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
