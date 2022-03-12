import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  //Injected required dependencies
  //Injected HttpClient to perform HTTP requests
  constructor(private _http:HttpClient) { }

  //Used HttpClient service class to perform Http request to post data on given url
  insertEmployee(employee:any){
    return this._http.post("http://localhost:8080/employeepayrollservice/insert",employee,{responseType:"text" as "json"});
  }
  //Used HttpClient service class  to perform Http request to get all data on given url
  getEmployee(){
    return this._http.get("http://localhost:8080/employeepayrollservice/retrieve");
  }
  //Used HttpClient service class performs Http request to get data for particular id on given url
  getEmployeeByID(Id:number){
    return this._http.get("http://localhost:8080/employeepayrollservice/get/"+Id);
  }
  //Used HttpClient service class performs Http request to put data for particular id on given url
  updateEmployeeByID(Id:number,employee:any){
    return this._http.put("http://localhost:8080/employeepayrollservice/update/"+Id,employee);
  }
  //Used HttpClient service class performs Http request to delete data for particular id on given url
  deleteEmployeeByID(Id:number){
    return this._http.delete("http://localhost:8080/employeepayrollservice/delete/"+Id);
  }
}
