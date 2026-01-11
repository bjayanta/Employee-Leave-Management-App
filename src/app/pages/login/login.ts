import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SigninModel } from '../../models/Employee.model';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: SigninModel = new SigninModel();

  employeeService = inject(EmployeeService);
  router = inject(Router);

  onLogin() {
    console.log(this.loginForm);
    this.employeeService.onLogin(this.loginForm).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message);

        if (res.result) {
          localStorage.setItem("user", JSON.stringify(res.data));
          this.router.navigateByUrl("/dashboard");
        }
      },
      error: (err: any) => {
        console.log(err);
        alert("API Error");
      }
    })
  }

}
