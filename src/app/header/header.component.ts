import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public title:string="Employee Payroll";
  //Navigates to dashboard component
  onDashboard(){
    this.router.navigate(["dashboard"]);
  }
  //Navigates to form component
  onForm(){
    this.router.navigate(["form"]);
  }
}
