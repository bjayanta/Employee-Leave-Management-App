import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { APIResponseModel, EmployeeList, EmployeeModel } from '../../models/Employee.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {

  employeeService = inject(EmployeeService);

  employeeList = signal<EmployeeList[]>([]);

  @ViewChild('employeeModal') employeeModal!: ElementRef;

  deptList = signal<any[]>([]);

  roleList$: Observable<any[]> = new Observable<any[]>();

  testList = toSignal(this.employeeService.getAllTests(), { initialValue: [] });

  employeeObj : EmployeeModel = new EmployeeModel();

  ngOnInit(): void {
    this.getEmployees();
    this.roleList$ = this.employeeService.getAllRoles();
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

  onSaveEmployee() {
    this.employeeService.onCreateEmployee(this.employeeObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert("Employee Added Successfully");
          this.getEmployees();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
