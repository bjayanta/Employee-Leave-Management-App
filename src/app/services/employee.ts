import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../models/Employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  baseUrl = 'https://freeapi.miniprojectideas.com/api/EmployeeLeave';

  constructor(private http: HttpClient) { }

  onLogin(data: any) {
    return this.http.post(`${this.baseUrl}/Login`, data)
  }

  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${this.baseUrl}/GetEmployees`);
  }

}
