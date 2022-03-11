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

  constructor(private router:Router,private service:EmployeeserviceService) { }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(data=>{console.log(data);
    this.employee=data;
    });
  }
  onAddUser(){
    this.router.navigate(["form"]);
  }
  deleteById(Id:number){
    this.service.deleteEmployeeByID(Id).subscribe(data=>{console.log("Data is deleted")});
  }
  editById(Id:number){
   this.router.navigate(['update',Id]);
  }

}
