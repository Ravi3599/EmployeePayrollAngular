import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public employee:any;

  //Injected required dependencies
  constructor(private router:Router,private service:EmployeeserviceService) { }

  //When component gets initialized all properties ngOnInit() hook gets called
  ngOnInit(): void {
    this.service.getEmployee().subscribe(data=>{console.log(data);
    this.employee=data;
    });
    console.log(this.employee);
  }
  //navigate page to form component to add employee
  onAddUser(){
    this.router.navigate(["form"]);
  }
  //call deleteEmployeeById method of service to delete employee
  deleteById(Id:number){
    this.service.deleteEmployeeByID(Id).subscribe(data=>{
      console.log("Data is deleted");
      window.location.reload();
    
  });
  }
  //navigates page to update which has form component to load existing employee record for updation
  editById(Id:number){
   this.router.navigate(['update',Id]);
  }

}
