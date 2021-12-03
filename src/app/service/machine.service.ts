import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl +"/api/";
@Injectable({
  providedIn: 'root'
})
export class MachineService {

  
machines:any;

machineSubject= new Subject<any>()


  constructor(private http: HttpClient) { }


  emitFilmsSubject(){
    this.machineSubject.next(this.machines)
  }
  getAllMachines(){

    const url =apiUrl+"machines/get"
  
   return this.http.get(url).subscribe((machines:any)=>{
     this.machines=machines;
     this.emitFilmsSubject();
   });
  
  }



  addMachine(nom:string,address:string,system:string)  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(apiUrl+'machines/add', {nom:nom,addressIP : address,systemExp:system}) 
  }

  updateMachinee(id:string)  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(apiUrl+'machines/update', {id}) 
  }


  updateInfoMachine(nom:string,address:string,system:string,id:string)  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(apiUrl+'machines/updateInfo', {machine:{nom:nom,addressIP : address,systemExp:system},id:id}) 
  }


}
