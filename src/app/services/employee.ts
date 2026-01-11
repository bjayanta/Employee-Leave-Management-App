import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  getAllDepts() {
    return this.http.get<APIResponseModel>(`${this.baseUrl}/GetDepartments`);
  }

  getAllRoles() {
    return this.http.get<APIResponseModel>(`${this.baseUrl}/GetAllRoles`).pipe(
      map((res: APIResponseModel) => res.data)
    );
  }

  getAllTests() {
    return this.http.get<APIResponseModel>(`${this.baseUrl}/GetDepartments`).pipe(
      map((res: APIResponseModel) => res.data)
    );
  }

  onCreateEmployee(data: any) {
    return this.http.post(`${this.baseUrl}/CreateEmployee`, data)
  }

}
