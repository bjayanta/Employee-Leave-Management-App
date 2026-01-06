import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeModel } from '../../models/Employee.model';
import { Employee } from '../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: EmployeeModel = new EmployeeModel();

  employeeService = inject(Employee);
  router = inject(Router);

  onLogin() {
    console.log(this.loginForm);
    this.employeeService.onLogin(this.loginForm).subscribe({
      next: (res: any) => {
        console.log(res);

        if (res.status == 200) {
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          this.router.navigateByUrl("/dashboard");
        }

        alert(res.message);
      },
      error: (err: any) => {
        console.log(err);
        alert("API Error");
      }
    })
  }

}
