import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any
  form = new FormGroup({

    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    system: new FormControl('', [Validators.required]),
     });

  constructor(private route: ActivatedRoute,private machineService :MachineService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })
  }


  
  get f(){
   
    return this.form.controls;

  }

  async onSubmit(){

    const name= this.form.get('name')!.value;
    const system= this.form.get('system')!.value;
    const address= this.form.get('address')!.value;


    this.machineService.updateInfoMachine(name,address,system,this.id).subscribe((res:any)=>{
       
      if (!res.status) {
        alert(res.errors)

      }else{
     alert("update succeed")
      }
    })
  }

}
