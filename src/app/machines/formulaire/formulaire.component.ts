import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {


  form = new FormGroup({

    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    system: new FormControl('', [Validators.required]),
     });

  constructor(private machineService :MachineService) { }

  ngOnInit(): void {
  }


  
  get f(){
   
    return this.form.controls;

  }

  async onSubmit(){

    const name= this.form.get('name')!.value;
    const system= this.form.get('system')!.value;
    const address= this.form.get('address')!.value;


    this.machineService.addMachine(name,address,system).subscribe((res:any)=>{
       
      if (!res.status) {
        alert(res.errors)

      }else{
     alert("added")
      }
    })
  }

}
