import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private _http:HttpClient) { }

  insertEmployee(employee:any){
    return this._http.post("http://localhost:8080/employeepayrollservice/insert",employee,{responseType:"text" as "json"});
  }

  getEmployee(){
    return this._http.get("http://localhost:8080/employeepayrollservice/retrieve");
  }
  getEmployeeByID(Id:number){
    return this._http.get("http://localhost:8080/employeepayrollservice/get/"+Id);
  }
  updateEmployeeByID(Id:number,employee:any){
    return this._http.put("http://localhost:8080/employeepayrollservice/update/"+Id,employee);
  }
  deleteEmployeeByID(Id:number){
    return this._http.delete("http://localhost:8080/employeepayrollservice/delete/"+Id);
  }
}
