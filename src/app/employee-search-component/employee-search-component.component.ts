import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-employee-search',
  templateUrl: 'employee-search-component.component.html'
})
export class EmployeeSearchComponent {
  searchTerm: string = '';
  matchingEmployees: Employee[] = [];
  EmpData: Employee[] = [];
  tdata:Employee[] = [];
  errorMessage: string = "";
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: emp => {
        this.EmpData = emp;
        this.tdata = this.EmpData;
      },
      error: err => this.errorMessage = err
    });

  }

  search() {
    const employees = this.EmpData;
    this.matchingEmployees = employees.filter(employee =>
      employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
