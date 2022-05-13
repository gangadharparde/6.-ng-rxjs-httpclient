import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): object {
    return [
      { "id": 12, "name": "Jade", "age": 32 },
      { "id": 13, "name": "Rogger", "age": 41 },
      { "id": 14, "name": "Alex", "age": 55 },
      { "id": 15, "name": "Chris", "age": 29 }
    ];
  }
  constructor() {
    //
  }
}