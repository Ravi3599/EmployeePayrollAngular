import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router,private service:EmployeeserviceService,private route:ActivatedRoute) { }

  Id:any=this.route.snapshot.paramMap.get('Id');
  employee=new Employee('','','','','',0,'','');
  title:string="Employee Payroll Form";
  submitted:boolean=false;
  saveCheckBox:boolean =false;

  ngOnInit(): void {
    this.service.getEmployeeByID(this.Id).subscribe((getData:any)=>{
      console.log(getData.data);
      this.employee=getData.data;
      this.employee.firstName=getData.data.firstName;
      this.employee.lastName=getData.data.lastName;
      this.employee.profilePic=getData.data.profilePic;
      this.employee.gender=getData.data.gender;
      this.employee.department=getData.data.department;
      this.employee.salary=getData.data.salary;
      this.employee.date=getData.data.date;
      this.employee.notes=getData.data.notes;
    })
  }
  
  onCancel(){
    this.router.navigate(["dashboard"]);
  }
  addEmployee(){
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe(data=>console.log('Data saved !'));
    this.submitted=true;
  }
  updateEmployee(){
    console.log(this.employee);
    this.service.updateEmployeeByID(this.Id,this.employee).subscribe(data=>console.log('Data Updated !'));
    this.submitted=true;
  }
  getVal(value:string){
    console.log(value);
    this.employee.department=value;
  }
  saveDepartment(value:boolean){
    this.saveCheckBox=value;

  }
 
}
