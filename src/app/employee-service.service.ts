import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,catchError,tap ,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
//   private employees: Employee[] = [
//     {
//       firstName: 'Rahul',
//       lastName: 'Sharma',
//       email: 'rahul.sharma@example.com',
//       title: 'Software Engineer',
//       phoneNumber: '+91 9876543210',
//       address: '123 Main St, Anytown, India'
//     },

//   {
//       firstName: 'Priya',
//       lastName: 'Kumar',
//       email: 'priya.kumar@example.com',
//       title: 'Web Developer',
//       phoneNumber: '+91 9876543220',
//       address: '456 Elm St, Anytown, India'
//     },

// {
//       firstName: 'Amit',
//       lastName: 'Patel',
//       email: 'amit.patel@example.com',
//       title: 'Product Manager',
//       phoneNumber: '+91 9876543230',
//       address: '789 Oak St, Anytown, India'
//     },

// {
//       firstName: 'Sneha',
//       lastName: 'Singh',
//       email: 'sneha.singh@example.com',
//       title: 'UX Designer',
//       phoneNumber: '+91 9876543240',
//       address: '246 Birch St, Anytown, India'
//     },

// {
//       firstName: 'Raj',
//       lastName: 'Gupta',
//       email: 'raj.gupta@example.com',
//       title: 'Marketing Manager',
//       phoneNumber: '+91 9876543250',
//       address: '369 Pine St, Anytown, India'
//     },

// {
//       firstName: 'Anjali',
//       lastName: 'Nair',
//       email: 'anjali.nair@example.com',
//       title: 'Software Engineer',
//       phoneNumber: '+91 9876543260',
//       address: '135 Maple St, Anytown, India'
//     },


    // Add more employees as needed
  // ];

private employeeUrl = 'assets/employeeData/employees.json';
constructor(private http: HttpClient){

}

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl).pipe(
      tap(data => console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
   
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
     
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
