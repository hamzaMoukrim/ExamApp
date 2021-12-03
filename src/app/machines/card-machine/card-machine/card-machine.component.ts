import { Component, Input, OnInit } from '@angular/core';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-card-machine',
  templateUrl: './card-machine.component.html',
  styleUrls: ['./card-machine.component.css']
})
export class CardMachineComponent implements OnInit {
  @Input()  machine:any ;
  constructor(private machineService :MachineService) { }

  ngOnInit(): void {
  }


  changeEtat(){

    this.machineService.updateMachinee(this.machine._id).subscribe((res:any)=>{
       
      if (!res.status) {
        alert(res.errors)

      }else{
        this.machine=res.machine
     alert("change etat succeed")
      }
    })

  }

}
