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

  //Injected required dependencies
  //Injected router to navigate from one component to another
  //Injected ActivatedRoute to get access to information about route
  constructor(private router:Router,private service:EmployeeserviceService,private route:ActivatedRoute) { }

  //Getting id from routes snapshot using paramMap for doing update operation
  Id:any=this.route.snapshot.paramMap.get('Id');
  employee=new Employee('','','','','',0,'','');
  title:string="Employee Payroll Form";
  //Used to check whether form is submitted or not
  submitted:boolean=false;

  //When component gets initialized to its properties ngOnInit() hook gets called
  //Here we are calling getEmployeeById to get form reloaded with data for particular is for updation
  ngOnInit(): void {
    this.service.getEmployeeByID(this.Id).subscribe((getData:any)=>{
      console.log(getData.data);
      this.employee=getData.data;
    })
  }
  //Navigates to dashboard component
  onCancel(){
    this.router.navigate(["dashboard"]);
  }
  //Calls insertEmployee method in service which uses http post method to save data to database
  addEmployee(){
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe(data=>console.log('Data saved !'));
    this.submitted=true;
  }
  //Calls updateEmployeeByID method in service which uses http update method to update data to database using ID aquired from route path
  updateEmployee(){
    console.log(this.employee);
    this.service.updateEmployeeByID(this.Id,this.employee).subscribe(data=>console.log('Data Updated !'));
    this.submitted=true;
  }
  getVal(value:string){
    console.log(value);
    this.employee.department=value;
  }
 
}
