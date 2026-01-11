import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { APIResponseModel, EmployeeList } from '../../models/Employee.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {

  employeeService = inject(EmployeeService);

  employeeList = signal<EmployeeList[]>([]);

  @ViewChild('employeeModal') employeeModal!: ElementRef;

  deptList = signal<any[]>([]);

  roleList$: Observable<any[]> = new Observable<any[]>();

  ngOnInit(): void {
    this.getEmployees();
    this.roleList$ = this.employeeService.getAllRoles();
    console.log(this.roleList$);
    this.getAllDepts();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (res: APIResponseModel) => {
        this.employeeList.set(res.data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getAllDepts() {
    this.employeeService.getAllDepts().subscribe({
      next: (res: APIResponseModel) => {
        console.log(res.data);
        this.deptList.set(res.data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openModal() {
    if(this.employeeModal) {
      this.employeeModal.nativeElement.style.display = 'block';
    }
  }

  closeModal() {
    if(this.employeeModal) {
      this.employeeModal.nativeElement.style.display = 'none';
    }
  }
}
