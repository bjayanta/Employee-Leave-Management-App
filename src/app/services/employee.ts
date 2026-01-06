import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  baseUrl = 'https://freeapi.miniprojectideas.com';

  constructor(private http: HttpClient) { }

  onLogin(data: any) {
    return this.http.post(`${this.baseUrl}/api/EmployeeLeave/Login`, data)
  }

}
