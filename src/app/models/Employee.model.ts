export class SigninModel {
    emailId: string;
    password: string;

    constructor() {
        this.emailId = "";
        this.password = "";
    }
}

export interface APIResponseModel {
    message: string;
    result: boolean;
    data: any;
}

export interface EmployeeList {
    employeeId: number;
    employeeName: string;
    deptId: number;
    deptName: string;
    contactNo: string;
    emailId: string;
    role: string;
}


export class EmployeeModel {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: string;
    password: string;
    gender: string;
    role: string;

    constructor() {
        this.employeeId = 0;
        this.employeeName = "";
        this.contactNo = "";
        this.deptId = "";
        this.gender = "";
        this.password = "";
        this.role = "";
        this.emailId = "";
    }
}