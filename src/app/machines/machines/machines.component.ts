import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {


  machines :any;
  MachinesSubscribe:Subscription=new Subscription()
  isLoaded=false


  constructor(private machineService :MachineService) { }

  ngOnInit(): void {

    this.machineService.getAllMachines()
    this.MachinesSubscribe = this.machineService.machineSubject.subscribe((res:any)=>{
      console.log(res.machines)
       this.machines=res.machines;
       this.isLoaded=true;
     });
  }

}
