import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Understanding RxJS Observable, Subject and HttpClient Resful Invocation App";
  employees!:Employee[];

  constructor(private employeeService: EmployeeService) { }
  new_employee = {
    "id": "18",
    "name": "Grace",
    "age": "22"
  };
  ngOnInit() {
    console.log("=================== CRUD Operation using HttpClinet=================");
    this.insertEmployee();
    this.updateSpecificEmployee();
    this.getSpecificEmployee();
    this.getAllEmployee();
    this.deleteSpecificEmployee();
    //Here, we make get request for the already deleted employee record which returns HTTP error response.
    this.deleteSpecificEmployee();
  }


  private insertEmployee() {
    this.employeeService.CreateEmployee(this.new_employee)
      .subscribe(data => {
        console.log("  POST: - Post Request for creating new employee");
        console.log("  POST: - id: " + data.id);
        console.log("  POST: - name: " + data.name);
        console.log("  POST: - age: " + data.age);
      });
    //Logs:
    //Post Request for creating new employee
    // id: 18
    // name: Grace
    // age: 22 
  }
  private getSpecificEmployee() {
    this.employeeService.GetEmployee(12)
      .subscribe(data => {
        console.log("   GET: - GET Request to get a employee with id - 12");
        console.log("   GET: - name: " + data.name);
        console.log("   GET: - age: " + data.age);
      });
    //Logs:
    //GET Request to get a employee with id - 12
    // name: Chris
    // age: 22
  }
  private getAllEmployee() {
    this.employeeService.GetEmployees()
      .subscribe(data => {
        this.employees = data;
      });
  }

  private updateSpecificEmployee() {
    const employee = {
      "name": "Adam",
      "age": "28"
    }
    this.employeeService.UpdateEmployee(18, employee)
      .subscribe(data => {
        console.log("   PUT: - PUT Request to update the employee with id - 18");
        console.log("   PUT: - updated name :" + data.name);
        console.log("   PUT: - updated age :" + data.age);
      });
    //Logs:
    //PUT Request to update the employee with id - 18
    //updated name :Adam
    //updated age :28
  }
  private deleteSpecificEmployee() {
    this.employeeService.DeleteEmployee(18)
      .subscribe(data => {
        console.log("DELETE: - DELETE Request to delete the employee with id - 18");
        console.log(data);
      });
  }
}

