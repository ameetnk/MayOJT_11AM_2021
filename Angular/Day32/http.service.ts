import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string="http://localhost:8080/api/";

  constructor(private http:HttpClient) { 

  }

    logincheck(obj){
      return  (this.http.post(`${this.BaseUrl}logincheck`,obj));
    }

    getAllEmployee(){
     return (this.http.get(`${this.BaseUrl}getallemployee`));
    }

    getParticularRecord(id:number){
     return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`));
    }

    getAllCountry(){
      return (this.http.get(`${this.BaseUrl}getallcountry`));
    }

    addEmployee(obj){
       return (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:"text"}));
    }
    updateEmployee(obj){
        return  (this.http.put(`${this.BaseUrl}updateemployee`,obj,{responseType:"text"}));
    }

    deleteEmployee(id:number){
      return  (this.http.delete(`${this.BaseUrl}deleteemployee/${id}`,{responseType:"text"}));
    }


}
