import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }
  employee:any=[];

  ngOnInit(): void {
  }

  
  onCancel(){
    this.router.navigate(["dashboard"]);
  }
  onSubmit(form:NgForm){
    console.log(form.value);
  }


}
